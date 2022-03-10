import {BaseApiURL} from "../base";
import {notification} from "antd";

export interface IAuthResponse {
    refresh?: string;
    access?: string;
    detail?: string;
}

class AuthService {
    async isAuthorized() {
        const accessToken = localStorage.getItem("_access")
        const refreshToken = localStorage.getItem("_refresh")
        if (accessToken && refreshToken) {
            const response = await AuthServiceAPI.verificationTokenToken(accessToken)
            if(response?.code) return false;
            setInterval(()=>{
                const refreshToken = localStorage.getItem("_refresh")
                if(refreshToken) {
                    AuthServiceAPI.getAccessToken(refreshToken)
                        .then((result)=>{
                            localStorage.setItem("_access", result.access)
                        })
                }
            }, 180000)
            return true
        }
        return false
    }

    async Authorize(username: string, password: string) {
        await AuthServiceAPI.getAuthToken(username, password)
            .then((result) => {
                if (result.access && result.refresh) {
                    localStorage.setItem("_access", result.access)
                    localStorage.setItem("_refresh", result.refresh)
                    document.location.reload();
                }
                if (result.detail) {
                    notification.error({message: 'Ошибка авторизации', description: result.detail});
                }
            })
            .catch((e) => {
                notification.error({message: 'Ошибка авторизации', description: e})
            })
    }
    async Logout() {
        localStorage.removeItem("_access")
        localStorage.removeItem("_refresh")
        document.location.reload();
    }
}



class AuthServiceAPI {
    static async getAuthToken(username: string, password: string) {
        const url = BaseApiURL + "/api/token/";
        const request = {
            username,
            password
        }
        return new Promise<IAuthResponse>((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", url);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = () => {
                if (xhr.readyState !== XMLHttpRequest.DONE) return;
                if (xhr.status > 199 && xhr.status < 300) {
                    const result = JSON.parse(xhr.responseText);
                    resolve(result);
                } else {
                    reject(JSON.parse(xhr.responseText).value);
                }
            };
            xhr.send(JSON.stringify(request));
        });
    }

    static async getAccessToken(refresh: string) {
        const url = BaseApiURL + "/api/token/refresh/";
        return new Promise<{ access: string }>((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", url);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = () => {
                if (xhr.readyState !== XMLHttpRequest.DONE) return;
                if (xhr.status > 199 && xhr.status < 300) {
                    const result = JSON.parse(xhr.responseText);
                    resolve(result);
                } else {
                    reject(JSON.parse(xhr.responseText).value);
                }
            };
            xhr.send(JSON.stringify({refresh: refresh}));
        });
    }

    static async verificationTokenToken(access: string) {
        const url = BaseApiURL + "/api/token/verify/";
        return new Promise<{ code?: string }>((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", url);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = () => {
                if (xhr.readyState !== XMLHttpRequest.DONE) return;
                if (xhr.status > 199 && xhr.status < 300) {
                    const result = JSON.parse(xhr.responseText);
                    resolve(result);
                } else {
                    reject(JSON.parse(xhr.responseText).value);
                }
            };
            xhr.send(JSON.stringify({token: access}));
        });
    }
}
export default new AuthService()
import {BaseApiURL, IPaginationResponse} from "../base";

const accessToken = () => localStorage.getItem("_access") ?? ""


export interface ISensorDataDTO {
    id: number;
    created_at: string;
    temp_upstairs: string;
    temp_downstairs: string;
    temp_in_ground: string;
    temp_street: string;
    humidity_greenhouse: string;
    humidity_greenhouse_in_ground: string;
    owner: number;
}

export interface IStationManageSystemDTO {
    id: number;
    created_at: string;
    servo_turn: number;
    is_on_lighting: boolean;
    is_on_ventilation: boolean;
    is_on_watering: boolean;
    owner: number;
}
export interface ICommandManageRequest {
    servo_turn: number;
    is_on_lighting: boolean;
    is_on_ventilation: boolean;
    is_on_watering: boolean;
}

export interface ISensorData extends IPaginationResponse {
    results: Array<ISensorDataDTO>
}
export interface IStationManageSystem extends IPaginationResponse {
    results: Array<IStationManageSystemDTO>
}

export class DataService {

    static async getSensorData() {
        const url = BaseApiURL + "/api/sensor-data/";
        return new Promise<ISensorData>((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.setRequestHeader("Authorization", "Bearer " + accessToken());
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
            xhr.send();
        });
    }
    static async getStationManagedSystems() {
        const url = BaseApiURL + "/api/managed-systems/";
        return new Promise<IStationManageSystem>((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.setRequestHeader("Authorization", "Bearer " + accessToken());
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
            xhr.send();
        });
    }
    static async getActuallyCommand() {
        const url = BaseApiURL + "/api/command-manage/";
        return new Promise<IStationManageSystemDTO>((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.setRequestHeader("Authorization", "Bearer " + accessToken());
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
            xhr.send();
        });
    }
    static async sendCommandManage(request: ICommandManageRequest) {
        const url = BaseApiURL + "/api/command-manage/create/";
        return new Promise<IStationManageSystem>((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", url);
            xhr.setRequestHeader("Authorization", "Bearer " + accessToken());
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
}
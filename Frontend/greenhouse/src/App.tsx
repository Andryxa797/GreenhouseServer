import React, {useEffect, useState} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {Home} from "./components/Home/Home";
import {Auth} from "./components/Auth/Auth";
import {Sidebar} from "./components/Sidebar/sidebar";
import {Layout} from "antd";
import {Preloader} from "./components/Common/Preloader";
import AuthService from "./services/Authentication/auth.service";

const {Content} = Layout;


function App() {
    const [authorized, setAuthorized] = useState(false);
    const [loadingAuthorize, setLoadingAuthorize] = useState(true);

    useEffect(() => {
        setLoadingAuthorize(true)
        AuthService.isAuthorized()
            .then((res) => {
                setAuthorized(res)
                setLoadingAuthorize(false)
            })
    }, [])

    if (!loadingAuthorize && !authorized) return <Auth/>
    return (
        <>
            {
                loadingAuthorize ?
                    <Layout style={{minHeight: '100vh'}}><Preloader/></Layout>
                    :
                    <Layout style={{minHeight: '100vh'}}>
                        <Sidebar/>
                        <Layout className="site-layout">
                            <Content style={{margin: '0 16px'}}>
                                <Routes>
                                    <Route path="/" element={<Home/>}/>
                                </Routes>
                            </Content>
                        </Layout>
                    </Layout>
            }
        </>
    );
}

export default App;

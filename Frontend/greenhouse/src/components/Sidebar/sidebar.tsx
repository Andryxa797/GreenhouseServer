import {Layout, Menu} from 'antd';
import {Link} from "react-router-dom";
import {useState} from "react";
import {DesktopOutlined, PieChartOutlined} from '@ant-design/icons';
import AuthService from "../../services/Authentication/auth.service";
import { useMediaPredicate } from "react-media-hook";

const {Sider} = Layout;

export const Sidebar = () => {
    const biggerThan400 = useMediaPredicate("(min-width: 400px)");
    const [collapsed, setCollapsed] = useState(!biggerThan400)
    const onCollapse = (collapsed: boolean) => setCollapsed(collapsed)

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<PieChartOutlined/>}><Link to="/">Главная</Link></Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined/>}><Link to="photos/">Фотографии</Link></Menu.Item>
                {/*<Menu.Item key="3" icon={<DesktopOutlined/>}><Link to="about/">О проекте</Link></Menu.Item>*/}
                <Menu.Item key="4" onClick={() => AuthService.Logout()} style={{color: "red"}}>Выйти</Menu.Item>
            </Menu>
        </Sider>
    )
}
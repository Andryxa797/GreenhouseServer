import {Col, Row} from "antd";
import {SensorsData} from "./SensorsData/SensorsData";
import {ManagedSystemsData} from "./ManagedSystemsData/ManagedSystemsData";
import {ManageForm} from "./ManageForm/ManageForm";
import {ActuallyCommandManage} from "./ActuallyCommandManage/ActuallyCommandManage";
import {useState} from "react";

export const Home = () => {
    const [reload, setReload] = useState(false)
    return (
        <>
            <Row gutter={[16, 16]}>
                <Col xl={12} >
                    <ManagedSystemsData/>
                </Col>
                <Col xl={12}>
                    <ManageForm setReload={setReload} reload={reload}/>
                    <ActuallyCommandManage reload={reload}/>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col xl={24}>
                    <SensorsData/>
                </Col>
            </Row>
        </>
    )
}
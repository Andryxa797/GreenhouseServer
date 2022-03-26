import {useEffect, useState} from "react";
import {Tag, Typography} from 'antd';
import {DataService, IStationManageSystemDTO} from "../../../services/Data/data";

const {Title} = Typography;

interface IActuallyCommandManageProps{
    reload: boolean;
}
export const ActuallyCommandManage = ({reload}:IActuallyCommandManageProps) => {
    const [data, setData] = useState<IStationManageSystemDTO | undefined>()
    useEffect(() => {
        DataService.getActuallyCommand()
            .then((result) => {
                setData(result)
            })
    }, [reload])

    return (
        <div style={{marginTop: "20px", background: "#fff", padding: "20px", width: "100%"}}>
            <Title level={3}>Последняя запись команды для управления</Title>
            <div>Включен ли свет? {data?.is_on_lighting ?
                <Tag color="green">Да</Tag> :
                <Tag color="gold">Нет</Tag>}
            </div>
            <div>Включена ли вентиляция? {data?.is_on_ventilation ?
                <Tag color="green">Да</Tag> :
                <Tag color="gold">Нет</Tag>}
            </div>
            <div>Включен ли полив? {data?.is_on_watering ?
                <Tag color="green">Да</Tag> :
                <Tag color="gold">Нет</Tag>}
            </div>
            <div>Процент открытия окон? {data?.servo_turn ?? 0}
            </div>
        </div>
    )
}
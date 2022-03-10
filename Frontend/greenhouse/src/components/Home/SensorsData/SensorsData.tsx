import {notification, Table} from 'antd';
import {DataService, ISensorDataDTO} from "../../../services/Data/data";
import {useEffect, useState} from "react";

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Дата создания',
        dataIndex: 'created_at',
        key: 'created_at',
        render: (created_at: string) => {
            const date = new Date(created_at)
            return `${date.toLocaleTimeString()}  ${date.toLocaleDateString()}`
        },
    },
    {
        title: 'Температура',
        dataIndex: 'temp_upstairs',
        key: 'temp_upstairs',
        render: (temp_upstairs: number) => Number(temp_upstairs).toFixed(2)
    },
    {
        title: 'Влажность почвы',
        dataIndex: 'humidity_greenhouse',
        key: 'humidity_greenhouse_in_ground',
        render: (humidity_greenhouse_in_ground: number) => Number(humidity_greenhouse_in_ground).toFixed(2)
    },
    {
        title: 'Влажность воздуха',
        dataIndex: 'humidity_greenhouse',
        key: 'humidity_greenhouse',
        render: (humidity_greenhouse: number) => Number(humidity_greenhouse).toFixed(2)
    },
]
export const SensorsData = () => {
    const [data, setData] = useState<Array<ISensorDataDTO>>([])
    useEffect(()=>{
        DataService.getSensorData()
            .then((result)=>{
                setData(result.results)
            })
            .catch((error)=>{
                notification.error({message: error})
            })
    }, [])

    return (
        <div style={{marginTop: "20px"}}>
            <Table columns={columns} dataSource={data} pagination={false}/>
        </div>
    )
}
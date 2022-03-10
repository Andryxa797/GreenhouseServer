import {notification, Table, Tag} from 'antd';
import {useEffect, useState} from "react";
import {DataService, ISensorDataDTO, IStationManageSystemDTO} from "../../../services/Data/data";

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
        }
    },
    {
        title: 'Включен ли свет?',
        dataIndex: 'is_on_lighting',
        key: 'is_on_lighting',
        render: (is_on_lighting: boolean) => {
            return is_on_lighting ? <Tag color="green">Да</Tag> : <Tag color="gold">Нет</Tag>
        }
    },
    {
        title: 'Включена ли вентиляция?',
        dataIndex: 'is_on_ventilation',
        key: 'is_on_ventilation',
        render: (is_on_lighting: boolean) => {
            return is_on_lighting ? <Tag color="green">Да</Tag> : <Tag color="gold">Нет</Tag>
        }
    },
    {
        title: 'Включен ли полив?',
        dataIndex: 'is_on_watering',
        key: 'is_on_watering',
        render: (is_on_lighting: boolean) => {
            return is_on_lighting ? <Tag color="green">Да</Tag> : <Tag color="gold">Нет</Tag>
        }
    },
]
export const ManagedSystemsData = () => {
    const [data, setData] = useState<Array<IStationManageSystemDTO>>([])
    useEffect(() => {
        DataService.getStationManagedSystems()
            .then((result) => {
                setData(result.results)
            })
            .catch((error) => {
                notification.error({message: error})
            })
    }, [])

    return (
        <div style={{marginTop: "20px"}}>
            <Table dataSource={data} columns={columns} pagination={false}/>
        </div>
    )
}
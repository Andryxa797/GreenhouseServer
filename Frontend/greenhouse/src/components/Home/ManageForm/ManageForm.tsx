import {Button, InputNumber , Form, Input, notification, Switch, Table} from "antd";
import {DataService, ICommandManageRequest} from "../../../services/Data/data";

interface IManageProps{
    reload: boolean;
    setReload: (reload: boolean)=>void
}

export const ManageForm = ({setReload, reload}:IManageProps) => {
    const onFinish = (values: ICommandManageRequest) => {
        DataService.sendCommandManage({...values})
            .then(()=>{
                notification.success({message: "Данные успешно отправлены"})
                setReload(!reload)
            })
            .catch((error)=> notification.error({message: "Ошибка отправки"}))
    };

    return (
        <div style={{marginTop: "20px", background: "#fff", padding: "10px 20px"}}>
            <Form
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                initialValues={{remember: true}}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Открытие окон (%)"
                    name="servo_turn"
                    rules={[{required: true, message: 'Пожалуйста, введите угол поворота сервопривода!'}]}
                >
                    <InputNumber  min={0} max={100} />
                </Form.Item>
                <Form.Item label="Включить свет" name='is_on_lighting' valuePropName="checked" initialValue={true}>
                    <Switch/>
                </Form.Item>
                <Form.Item label="Включить вентиляцию" name='is_on_ventilation' valuePropName="checked" initialValue={true}>
                    <Switch/>
                </Form.Item>
                <Form.Item label="Включить полив" name='is_on_watering' valuePropName="checked" initialValue={true}>
                    <Switch/>
                </Form.Item>

                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
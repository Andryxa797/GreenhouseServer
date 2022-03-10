import {Button, Form, Input} from "antd";
import AuthService from "../../services/Authentication/auth.service";
interface IAuthForm{
    username: string;
    password: string;
}

export const Auth = () => {
    const onFinish = (values: IAuthForm) => {
        AuthService.Authorize(values.username, values.password)
    };

    return (
        <div className="auth-container">
            <div className="auth-form">
                <Form
                    name="basic"
                    labelCol={{span: 8}}
                    wrapperCol={{span: 16}}
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{required: true, message: 'Please input your username!'}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{required: true, message: 'Please input your password!'}]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item wrapperCol={{offset: 8, span: 16}}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
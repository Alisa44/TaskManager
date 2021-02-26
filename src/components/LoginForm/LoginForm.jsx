import React  from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Form, Input, Button } from 'antd';
import {login, setLoginFormOpen, setUserMessage} from '../../store/actions';
import styles from './LoginForm.module.scss';

const LoginForm = () => {
    const {userMessage} = useSelector(state => state.state);
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const onFinish = values => {
        dispatch(login(values.username, values.password));
    };
    
    const closeModal = () => {
        form.resetFields();
        dispatch(setUserMessage(null));
        dispatch(setLoginFormOpen(false));
    };

    return <Form
        form={form}
        name="login"
        onFinish={onFinish}
        initialValues={{
            username: '',
            password: '',
        }}
    >
        <Form.Item name="username">
            <Input placeholder="Name"/>
        </Form.Item>
        <Form.Item name="password">
            <Input.Password placeholder={'Password'} />
        </Form.Item>

        {userMessage ? <div className={styles.errorMessage}>{userMessage.password || userMessage.username}</div> : null}

        <div className={styles.btnsWrapper}>
            <Form.Item>
                <Button type="default" onClick={closeModal}>Cancel</Button>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Log in</Button>
            </Form.Item>
        </div>
    </Form>;
};

export default LoginForm;
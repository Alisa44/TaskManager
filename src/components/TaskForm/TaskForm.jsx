import React  from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Form, Input, Button} from 'antd';
import {createNewTask, setTaskFormOpen, setUserMessage} from '../../store/actions';
import styles from '../../commonStyles/form.module.scss';

const TaskForm = () => {
    const {userMessage, isAdmin} = useSelector(state => state.state);
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const onFinish = values => {
        dispatch(createNewTask(values));
    };

    const closeModal = () => {
        form.resetFields();
        dispatch(setUserMessage(null));
        dispatch(setTaskFormOpen(false));
    };

    return <Form
        form={form}
        name="login"
        onFinish={onFinish}
        initialValues={{
            username: '',
            email: '',
            text: '',
        }}
    >
        <Form.Item name="username">
            <Input placeholder="Name" disabled={isAdmin}/>
        </Form.Item>
        {userMessage ? <div className={styles.errorMessage}>{userMessage.username || userMessage.username}</div> : null}
        <Form.Item name="email">
            <Input type='email' placeholder={'Email'} disabled={isAdmin}/>
        </Form.Item>
        {userMessage ? <div className={styles.errorMessage}>{userMessage.email || userMessage.username}</div> : null}
        <Form.Item name="text">
            <Input.TextArea placeholder={'Text'}/>
        </Form.Item>
        {userMessage ? <div className={styles.errorMessage}>{userMessage.text || userMessage.username}</div> : null}
        <div className={styles.btnsWrapper}>
            <Form.Item>
                <Button type="default" onClick={closeModal}>Cancel</Button>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Send</Button>
            </Form.Item>
        </div>
    </Form>;
};

export default TaskForm;
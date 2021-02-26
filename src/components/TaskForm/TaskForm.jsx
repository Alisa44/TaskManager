import React, {useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Form, Input, Button} from 'antd';
import {createNewTask, editCurrentTask} from '../../store/actions';
import {textStatuses} from '../../constants/text';
import styles from '../../commonStyles/form.module.scss';

const TaskForm = ({handleCancel}) => {
    const {userMessage, isAdmin, currentTask} = useSelector(state => state.state);
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const isFieldsDisabled = useMemo(() => isAdmin && currentTask, [isAdmin, currentTask]);

    const getNewStatus = (textWasEdited) => {
        const {status: currentStatus} = currentTask;
        let newStatus = currentStatus;
        if (textWasEdited) newStatus = currentStatus === textStatuses.NOT_DONE
            ? textStatuses.NOTE_DONE_EDITED
            : currentStatus === textStatuses.DONE
                ? textStatuses.DONE_EDITED : currentStatus;
        return newStatus;
    };

    const getEditedData = values => {
        const prevText = currentTask.text;
        const textWasEdited = prevText !== values.text;
        const newStatus = getNewStatus(textWasEdited);
        return {...values, id: currentTask.id, status: newStatus};
    };

    const onFinish = values => {
        if (currentTask) {
            const data = getEditedData(values);
            dispatch(editCurrentTask(data));
        } else {
            dispatch(createNewTask(values));
        }
    };

    const closeModal = () => {
        form.resetFields();
        handleCancel();
    };

    return <Form
        form={form}
        name="task"
        onFinish={onFinish}
        initialValues={{
            username: currentTask?.username || '',
            email: currentTask?.email || '',
            text: currentTask?.text || '',
        }}
    >
        <Form.Item name="username">
            <Input placeholder="Name" disabled={isFieldsDisabled}/>
        </Form.Item>
        {userMessage ? <div className={styles.errorMessage}>{userMessage.username || userMessage.username}</div> : null}
        <Form.Item name="email">
            <Input type='email' placeholder={'Email'} disabled={isFieldsDisabled}/>
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
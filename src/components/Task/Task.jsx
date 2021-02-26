import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Card} from 'antd';
import {EditOutlined} from '@ant-design/icons';

import StatusBlock from '../StatusBlock/StatusBlock';
import {setCurrentTask, setTaskFormOpen} from '../../store/actions';
import styles from './Task.module.scss';

const Task = ({data}) => {
    const {isAdmin} = useSelector(state => state.state);
    const {email, username, text, status} = data;
    const dispatch = useDispatch();

    const openEditForm = async () => {
        await dispatch(setCurrentTask(data));
        await dispatch(setTaskFormOpen(true));
    };

    return <Card style={{width: 400, marginBottom: 20, boxShadow: '4px 4px 4px lightgrey'}}
                 actions={[<Button icon={<EditOutlined/>}
                                   disabled={!isAdmin}
                                   onClick={openEditForm}/>]}
                 title={<div className={styles.userName}>{email}</div>}
                 extra={<StatusBlock status={status} task={data}/>}>
        <Card.Meta
            title={username}
            description={text}
        />
    </Card>;
};

export default Task;
import React from 'react';
import {Card, Tooltip} from 'antd';
import {EditOutlined, CheckSquareOutlined, QuestionCircleOutlined} from '@ant-design/icons';
import {statuses} from '../../constants/text';
import styles from './Task.module.scss';

const Task = ({data}) => {
    const {email, username, text, status} = data;

    const openEditForm = () => {

    };

    const getStatusIcon = () => {
        switch (status) {
            case 0:
                return <QuestionCircleOutlined className={styles.greyIcon}/>;
            case 1:
                return <QuestionCircleOutlined className={styles.blueIcon}/>;
            case 10:
                return <CheckSquareOutlined className={styles.greenIcon}/>;
            case 11:
                return <CheckSquareOutlined className={styles.blueIcon}/>;
            default:
                return null;
        }

    };

    return <Card style={{width: 400, marginBottom: 20, boxShadow: '4px 4px 4px lightgrey'}}
                 actions={[<EditOutlined onClick={openEditForm}/>]}
                 title={<div className={styles.userName}>{email}</div>}
                 extra={<Tooltip title={statuses[status]}>
                     {getStatusIcon()}
                 </Tooltip>}>
        <Card.Meta
            title={username}
            description={text}
        />
    </Card>;
};

export default Task;
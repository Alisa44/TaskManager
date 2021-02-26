import React from 'react';
import {Card} from 'antd';
import {EditOutlined} from '@ant-design/icons';

const Task = ({data}) => {
    const {email, username, text, status} = data;

    const openEditForm = () => {

    };

    return <Card style={{width: 400, marginBottom: 20, boxShadow: '4px 4px 4px lightgrey'}}
                 actions={[<EditOutlined onClick={openEditForm}/>]}
                 title={username}
                 extra={email}>
        <Card.Meta
            title={status}
            description={text}
        />
    </Card>;
};

export default Task;
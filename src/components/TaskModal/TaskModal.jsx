import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Modal} from 'antd';

import TaskForm from '../TaskForm/TaskForm';
import {setTaskFormOpen} from '../../store/actions';

const TaskModal = () => {
    const { isTaskFormOpen } = useSelector(state => state.state);
    const dispatch = useDispatch();

    const handleCancel = () => {
        dispatch(setTaskFormOpen(false));
    };

    return <Modal title={'Log in'}
                  visible={isTaskFormOpen}
                  footer={null}
                  onCancel={handleCancel}>
        <TaskForm/>
    </Modal>;
};

export default TaskModal;
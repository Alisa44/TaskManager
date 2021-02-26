import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Modal} from 'antd';

import TaskForm from '../TaskForm/TaskForm';
import {setCurrentTask, setTaskFormOpen, setUserMessage} from '../../store/actions';

const TaskModal = () => {
    const { isTaskFormOpen, currentTask } = useSelector(state => state.state);
    const dispatch = useDispatch();

    const handleCancel = () => {
        dispatch(setTaskFormOpen(false));
        dispatch(setUserMessage(null));
        dispatch(setCurrentTask(null));
    };

    return <Modal title={currentTask ? 'Edit task' : 'Create task'}
                  visible={isTaskFormOpen}
                  destroyOnClose
                  onClose={handleCancel}
                  footer={null}
                  onCancel={handleCancel}>
        <TaskForm handleCancel={handleCancel}/>
    </Modal>;
};

export default TaskModal;
import React from 'react';
import {useSelector} from 'react-redux';
import Task from '../../components/Task/Task';
import styles from './Tasks.module.scss';

const Tasks = () => {
    const { tasks } = useSelector(state => state.state);
    return <div className={styles.wrapper}>
        {tasks.map(task => <Task data={task} key={task.id}/>)}
    </div>;
};

export default Tasks;
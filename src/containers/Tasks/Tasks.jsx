import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Pagination} from 'antd';

import Task from '../../components/Task/Task';
import SortActions from '../SortActions/SortActions';
import {setCurrentPage} from '../../store/actions';
import styles from './Tasks.module.scss';

const Tasks = () => {
    const { tasks, total } = useSelector(state => state.state);
    const dispatch = useDispatch();

    const onPaginationChange = value => {
        dispatch(setCurrentPage(value));
    };
    
    return <div className={styles.wrapper}>
        <SortActions/>
        {tasks.map(task => <Task data={task} key={task.id}/>)}
        <Pagination onChange={onPaginationChange} total={total} pageSize={3}/>
    </div>;
};

export default Tasks;
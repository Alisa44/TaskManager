import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Tasks from '../../containers/Tasks/Tasks';
import LoginModal from '../../components/LoginModal/LoginModal';
import TaskModal from '../../components/TaskModal/TaskModal';
import {getTasksList, setIsAdmin} from '../../store/actions';
import styles from './Home.module.scss';

const Home = () => {
    const {sortField, sortDirection, currentPage} = useSelector(state => state.state);
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem('token')) dispatch(setIsAdmin(true));

        dispatch(getTasksList(sortField, sortDirection, currentPage));
    }, [dispatch, sortField, sortDirection, currentPage]);

    return <div className={styles.wrapper}>
        <Tasks/>
        <LoginModal/>
        <TaskModal/>
    </div>;
};

export default Home;
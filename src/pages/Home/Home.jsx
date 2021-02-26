import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import Tasks from '../../containers/Tasks/Tasks';
import {getTasksList} from '../../store/actions';
import styles from './Home.module.scss';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTasksList());
    }, [dispatch]);

    return <div className={styles.wrapper}>
        <Tasks/>
    </div>;
};

export default Home;
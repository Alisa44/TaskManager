import React from 'react';
import {useDispatch} from 'react-redux';

import {setLoginFormOpen, setTaskFormOpen} from '../../store/actions';
import styles from './Header.module.scss';
import {Button, PageHeader} from 'antd';

const Header = () => {
    const dispatch = useDispatch();

    const openLoginForm = () => {
        dispatch(setLoginFormOpen(true));
    };

    const createNewTask = () => {
        dispatch(setTaskFormOpen(true));
    };

    return <div className={styles.headerWrapper}>
        <PageHeader title='Task Manager'
                    ghost={false}
                    extra={[
                        <Button type='primary'
                                onClick={createNewTask}>
                            New Task
                        </Button>,
                        <Button type='default'
                                onClick={openLoginForm}>
                            Log in
                        </Button>]}/>
    </div>;
};

export default Header;
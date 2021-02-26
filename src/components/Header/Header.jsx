import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, PageHeader} from 'antd';

import {setIsAdmin, setLoginFormOpen, setTaskFormOpen} from '../../store/actions';
import styles from './Header.module.scss';

const Header = () => {
    const dispatch = useDispatch();
    const {isAdmin} = useSelector(state => state.state);
    
    const logOut = () => {
        localStorage.setItem('token', '');
        dispatch(setIsAdmin(false));
    };

    const onLoginClick = () => {
        isAdmin
            ? logOut()
            : dispatch(setLoginFormOpen(true));
    };

    const createNewTask = () => {
        dispatch(setTaskFormOpen(true));
    };

    return <div className={styles.headerWrapper}>
        <PageHeader title='Task Manager'
                    ghost={false}
                    extra={[
                        <Button type='primary'
                                key='newTask'
                                onClick={createNewTask}>
                            New Task
                        </Button>,
                        <Button type='default'
                                key='login'
                                onClick={onLoginClick}>
                            {isAdmin ? 'Log Out' : 'Log In'}
                        </Button>]}/>
    </div>;
};

export default React.memo(Header);
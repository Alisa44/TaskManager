import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Modal} from 'antd';

import LoginForm from '../LoginForm/LoginForm';
import {setLoginFormOpen} from '../../store/actions';

const LoginModal = () => {
    const { isLogInFormOpen } = useSelector(state => state.state);
    const dispatch = useDispatch();
    
    const handleCancel = () => {
        dispatch(setLoginFormOpen(false));
    };

    return <Modal title={'Log in'}
                  visible={isLogInFormOpen}
                  footer={null}
                  onCancel={handleCancel}>
        <LoginForm/>
    </Modal>;
};

export default LoginModal;
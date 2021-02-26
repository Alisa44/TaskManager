import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Checkbox} from 'antd';

import {editCurrentTask} from '../../store/actions';
import styles from './StatusBlock.module.scss';

const StatusBlock = ({status, task}) => {
    const {isAdmin} = useSelector(state => state.state);
    const dispatch = useDispatch();
    const edited = status === 1 || status === 11;

    const changeStatus = () => {
        task.status < 10 && dispatch(editCurrentTask({...task, status: 10}));
    };

    return <div className={styles.wrapper}>
        {edited ? <div className={styles.editedMark}>edited</div> : null}
        <Checkbox checked={status >= 10}
                  disabled={!isAdmin}
                  onChange={changeStatus}/>
    </div>;
};

export default StatusBlock;
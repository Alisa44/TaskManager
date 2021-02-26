import React from 'react';
import styles from './Button.module.scss';

const Button = ({text, onClick}) => {
    return <button className={styles.buttonStart} onClick={onClick}>{text}</button>;
};

export default Button;
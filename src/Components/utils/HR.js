import React from 'react'
import styles from './hr.module.css';
function HR({width,color="black"}) {
    return (
        <hr className={styles.hrclass} style={{width,background:color}}/>
    )
}

export default HR;

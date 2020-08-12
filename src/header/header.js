import React from 'react';
import styles from './header.module.css'
const burgerheader = (props) => {
    return (
        <div className = {styles.header}>
            <div className = {styles.logo}>
                <h2>Welcome to some stylish burger</h2>
            </div>
            <div className = {styles.buttongroup}>

            </div>
            <div className = {styles.buttonheader}>
                <button onClick = {props.clickBuilder} className = {styles.button}>Builder</button>
            </div>
            <div className = {styles.buttonheader}>
                <button onClick = {props.clickOrder} className = {styles.button}>Orders</button>
            </div>

        </div>
    )
}

export default burgerheader
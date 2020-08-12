import React from 'react';
import Control from '../build/control'
import Example from '../build/example'
import styles from './page.module.css'

const Builder = (props)=>{
    return (
        <div className = {styles.emptypadding}>
            <div className = {[styles.centerText, styles.tag].join(' ')}>Your Demo Burger</div>
            <Example />
            <div className = {[styles.centerText, styles.tag].join(' ')}>Cost: ${props.price}</div>
            <Control />
            <div className = {styles.centerText}>
                <button onClick = {props.clear} className = {styles.btn}>Clear</button>
                <button onClick = {props.checkOut} className = {styles.btn}>Check Out</button>
            </div>

        </div>
    )
}

export default Builder
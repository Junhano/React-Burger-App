import React, {useContext} from 'react';
import styles from './build.module.css'
import './build.module.css'
import Context from '../context/context'

const Control = (props)=>{
    const context = useContext(Context)
    const ControlComponent = context.control.map(item => {
        return (
            <div className = {styles.row} key = {item}>
                <div className = {styles.header}>
                <h3 className = {styles.center} >{item}: {context.amount[item]}</h3>
                </div>
                <div className = {styles.buttongroup}>
                    <button onClick = {()=>context.addItem(item)} >+</button>
                    <button onClick = {()=>context.removeItem(item)}>-</button>
                </div>

            </div>
        )
    })
    return (
        <div className = {styles.container}>
            {ControlComponent}
        </div>
    )
}

export default Control
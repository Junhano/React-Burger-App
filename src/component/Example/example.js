import React from 'react';
import styles from './example.css'
import Ingrendients from '../Ingrendients/Ingrendients'

let Example = (props) =>{
    const Ingrendient = Object.keys(props.amount).map(key =>{
        return [...Array(props.amount[key])].map((_, index)=>{
            return <Ingrendients key = {key + index} type = {key} />
        })
    })

    return (
        <div className = {styles.example}>
            <div className = {styles.topBun}></div>
            {Ingrendient}
            <div className = {styles.bottomBun}></div>

        </div>
    )
}

export default Example
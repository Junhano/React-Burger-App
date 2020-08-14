import React from 'react'
import styles from './summary.css'
import Aux from '../Aux/Aux'

const Summary = (props)=>{
    const listItem = Object.keys(props.items).map(item =>{
        return (
        <label className = {styles.orderlabel} key = {item}>
            {item}: {props.items[item]}
        </label>)
    })
    return (
        <Aux>
            <h1 className = {styles.orderheader}>Order Summary</h1>
            {listItem}
            <hr />
            <h2 className = {styles.summary}>Total Price: {props.price}</h2>
            <div className = {styles.buttongroup}>
                <button className = {styles.button} onClick = {props.cancel}>Cancel</button>
                <button className = {styles.button} onClick = {props.proceed}>Proceed</button>
            </div>

        </Aux>

    )
}

export default Summary
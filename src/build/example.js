import React, {useContext} from 'react';
import styles from './build.module.css'
import Context from '../context/context'

let Example = (props) =>{
    const context = useContext(Context)
    let Meat = []
    for (let i = 0; i < context.amount['meat']; i++){
        Meat.push(
            <div className = {styles.meat}></div>
        )
    }
    let Salad = []
    for (let i = 0; i < context.amount['salad']; i++){
        Salad.push(
            <div className = {styles.salad}></div>
        )
    }
    let Cheese = []
    for (let i = 0; i < context.amount['cheese']; i++){
        Cheese.push(
            <div className = {styles.cheese}></div>
        )
    }
    return (
        <div className = {styles.example}>
            <div className = {styles.topBun}></div>
            {Meat}
            {Salad}
            {Cheese}
            <div className = {styles.bottomBun}></div>

        </div>
    )
}

export default Example
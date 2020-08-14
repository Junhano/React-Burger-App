import React from 'react'
import styles from './Ingrendients.css'
const Ingrendients = (props) =>{
    switch(props.type){
        case 'meat':
            return (<div className = {styles.meat}></div>)
        case 'salad':
            return (<div className = {styles.salad}></div>)
        case 'cheese':
            return (<div className = {styles.cheese}></div>)
        case 'bacon':
            return (<div className = {styles.bacon}></div>)
        default:
            return null;
            
    }
}

export default Ingrendients
import React from 'react';
import OrderList from '../build/orderitem'
import styles from './page.module.css'
const Orders = (props)=>{
    let cost = 0
    props.orderlist.forEach(element => {
        cost += 10
        for (const [name, amount] of Object.entries(element)){
            cost += amount * props.pricetag[name]
        }
    });
    return (
        <div className = {styles.emptypadding}>
            <div>
                <h2 className = {styles.centerText}>
                    Orders Page
                </h2>
            </div>
            <div className = {styles.container}>
                <OrderList orderlist = {props.orderlist} pricetag = {props.pricetag}/>
                <p className = {styles.total}>Total: {cost} dollars</p>
            </div>
            <div className = {styles.centerText}>
                <button onClick = {props.checkOut} className = {styles.btn}>Checkout</button>
            </div>
        </div>

    )
}

export default Orders
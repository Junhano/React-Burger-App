import React from 'react';
import OrderList from '../../component/orderItem/orderitem'
import styles from './order.css'
const Orders = (props)=>{

    price = {
        'meat': 5,
        'salad': 3,
        'cheese': 4,
        'bacon': 2
    }
    let cost = 0
    props.orderlist.forEach(element => {
        cost += 3
        for (const [name, amount] of Object.entries(element)){
            cost += amount * price[name]
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
                <OrderList orderlist = {props.orderlist} pricetag = {this.price}/>
                <p className = {styles.total}>Total: {cost} dollars</p>
            </div>
            <div className = {styles.centerText}>
                <button onClick = {props.checkOut} className = {styles.btn}>Checkout</button>
            </div>
        </div>

    )
}

export default Orders
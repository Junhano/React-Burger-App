import React from 'react';
import styles from './orderitem.css'
import './orderitem.css'


const OrderItem = (props)=>{
    let totalprice

    const OrderList = props.orderlist.map((order, index) =>{
        totalprice = 10
        for (const [name, amount] of Object.entries(order)){
            totalprice += amount * props.pricetag[name]
        }
        return (
            <div className = {styles.orderrow} key = {index}>
                <label>Order# {index + 1}</label>
                <label>meat: {order['meat']}</label>
                <label>salad:{order['salad']}</label>
                <label>cheese:{order['cheese']}</label>
                <label>Bacon: {order['bacon']}</label>
                <label>Price: {totalprice} Dollars</label>
            </div>
        )
    })
    return(
        <div className = {styles.bottomborder}>
            {OrderList}
        </div>

    )
}

export default OrderItem
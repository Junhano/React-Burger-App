import React, {useContext} from 'react';
import styles from './build.module.css'
import './build.module.css'
import Context from '../context/context'

const OrderItem = (props)=>{
    const context = useContext(Context)
    let totalprice

    const OrderList = props.orderlist.map((order, index) =>{
        totalprice = 10
        for (const [name, amount] of Object.entries(order)){
            totalprice += amount * props.pricetag[name]
        }
        return (
            <div className = {styles.orderrow} onClick = {()=>context.deleteorder(index)} key = {index}>
                <label>Order# {index + 1}</label>
                <label>meat: {order['meat']}</label>
                <label>salad:{order['salad']}</label>
                <label>cheese:{order['cheese']}</label>
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
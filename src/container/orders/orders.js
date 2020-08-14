import React, {Component} from 'react';
import OrderList from '../../component/orderItem/orderitem'
import styles from './order.css'


class Orders extends Component{

    price = {
        'meat': 5,
        'salad': 3,
        'cheese': 4,
        'bacon': 2
    }
    cost = 0
    

    _ = this.props.orderlist.forEach(element => {
        this.cost += 10
        for (const [name, amount] of Object.entries(element)){
            this.cost += amount * this.price[name]
        }
    })

    render(){
        return (
            <div className = {styles.emptypadding}>
                <div>
                    <h2 className = {styles.centerText}>
                        Orders Page
                    </h2>
                </div>
                <div className = {styles.container}>
                    <OrderList orderlist = {this.props.orderlist} pricetag = {this.price}/>
                    <p className = {styles.total}>Total: {this.cost} dollars</p>
                </div>
                <div className = {styles.centerText}>
                    <button onClick = {this.props.checkOut} className = {styles.btn}>Checkout</button>
                </div>
            </div>
        )
    }

}

export default Orders
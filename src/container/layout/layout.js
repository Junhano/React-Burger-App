import React, {Component} from 'react';
import Aux from '../../component/Aux/Aux'
import styles from './layout.css'
import Burgerheader from '../../component/header/header'
import Builder from '../burgerbuilder/burgerbuilder'
import Order from '../orders/orders'



class Layout extends Component {
    
      state = { 
        page: true,
      }
      changeToBuilder= ()=>{
        this.setState({
          page: true
        })
      }
    
      changeToOrder = ()=>{
        this.setState({
          page: false
        })
      }


    render(){
        return (
            <Aux>
                <div className = {styles.background}>
                    <Burgerheader clickBuilder = {this.changeToBuilder} clickOrder = {this.changeToOrder}/>
                    {this.state.page ? <Builder /> 
                    : <Order orderlist = {[]} />}
                </div>
            </Aux>
        )

    }
}



export default Layout


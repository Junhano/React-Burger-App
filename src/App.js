import React, { Component } from 'react';
import './App.css';
import Burgerheader from './header/header'
import Builder from './page/builder'
import Order from './page/orders'
import Context from './context/context'
class App extends Component {

  price = {
    'meat': 5,
    'salad': 3,
    'cheese': 4
  }


  state = { 
    page: true,
    item: {
      'meat': 0,
      'salad': 0,
      'cheese': 0
    },
    orderItem: []
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

  finalCheckOut = ()=>{
    alert('You have checked out')
    this.setState({
      orderItem: [],
      page: true
    })
  }

  tempCheckOut = ()=>{
    const orderTemp = [...this.state.orderItem]
    orderTemp.push(this.state.item)
    alert('Precced to paying page')
    this.setState({
      page: false,
      orderItem: orderTemp,
      item: {
        'meat': 0,
        'salad': 0,
        'cheese': 0
      }
    })
  }
  
  clearOrder = ()=>{
    alert('Clearing Item')
    this.setState({
      item: {
        'meat': 0,
        'salad': 0,
        'cheese': 0
      }
    })
  }

  addItem = (itemname)=>{
    this.setState((prevState)=> (
        prevState.item[itemname] += 1
    ))
    
  }

  removeItem = (itemname) =>{
    this.setState((prevState)=>(
      prevState.item[itemname] > 0 ? prevState.item[itemname] -= 1 : prevState.item.itemname
    ))
  }

  deleteorder = (index) =>{
    const copy = [...this.state.orderItem]
    copy.splice(index, 1)
    this.setState({
      orderItem: copy
    })
  }

  render() {
    let totalprice = 10
    for (const [name, amount] of Object.entries(this.state.item)){
      totalprice += amount * this.price[name]
    }
    return (
      <div className="App">
          <Burgerheader clickBuilder = {this.changeToBuilder} clickOrder = {this.changeToOrder}/>
          <Context.Provider value ={{amount: this.state.item, addItem: this.addItem, removeItem: this.removeItem, control: Object.keys(this.state.item), deleteorder: this.deleteorder}}>
            {this.state.page ? <Builder amount = {this.state.item} price = {totalprice} checkOut = {this.tempCheckOut} clear = {this.clearOrder} /> 
            : <Order checkOut = {this.finalCheckOut} orderlist = {this.state.orderItem} pricetag = {this.price} />}
          </Context.Provider>

      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import OrderList from "../../component/orderItem/orderitem";
import styles from "./order.css";
import axios from "../../axios-orders";
import Loader from "../../component/Loader/loader";
import Modal from "../../component/Modal/Modal";
import Aux from "../../component/Aux/Aux";
class Orders extends Component {
  state = {
    orders: {},
    loading: true,
    cost: 0,
  };

  componentDidMount() {
    axios
      .get("order.json")
      .then((response) => {
        if (response.data !== null) {
          const keys = Object.keys(response["data"]);
          let totalcost = 0;
          for (const key of keys) {
            let entries = Object.entries(response["data"][key].order);
            totalcost += 3;
            for (const [name, amount] of entries) {
              totalcost += this.price[name] * amount;
            }
          }

          this.setState({
            orders: response.data,
            loading: false,
            cost: totalcost,
          });
        } else {
          this.setState({ loading: false });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  price = {
    meat: 5,
    salad: 3,
    cheese: 4,
    bacon: 2,
  };

  MainContent = () => {
    return (
      <Aux>
        {!this.state.loading ? (
          <div className={styles.container}>
            <OrderList orderlist={this.state.orders} pricetag={this.price} />
            <p className={styles.total}>Total: {this.state.cost} dollars</p>
          </div>
        ) : (
          <Modal>
            <Loader />
          </Modal>
        )}
      </Aux>
    );
  };

  render() {
    return (
      <div className={styles.emptypadding}>
        <div>
          <h2 className={styles.centerText}>Orders Page</h2>
        </div>
        {this.MainContent()}
        <div className={styles.centerText}>
          <button onClick={this.props.checkOut} className={styles.btn}>
            Checkout
          </button>
        </div>
      </div>
    );
  }
}

export default Orders;

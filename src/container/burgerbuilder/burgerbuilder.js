import React, { Component } from "react";
import Control from "../../component/control/control";
import Example from "../../component/Example/example";
import styles from "./burgerbuilder.css";
import Modal from "../../component/Modal/Modal";
import Aux from "../../component/Aux/Aux";
import Summary from "../../component/Summary/summary";
import Loader from "../../component/Loader/loader";

const emptyItem = {
  meat: 0,
  salad: 0,
  cheese: 0,
  bacon: 0,
};

class Builder extends Component {
  price = {
    meat: 5,
    salad: 3,
    cheese: 4,
    bacon: 2,
  };

  state = {
    item: {
      ...emptyItem,
    },
    price: 3,
    ordering: false,
    loading: false,
  };

  addItem = (type) => {
    const ItemTemp = { ...this.state.item };
    ItemTemp[type] += 1;
    let newPrice = this.state.price + this.price[type];
    this.setState({
      item: ItemTemp,
      price: newPrice,
    });
  };
  removeItem = (type) => {
    const ItemTemp = { ...this.state.item };
    let newPrice = this.state.price;
    if (ItemTemp[type] > 0) {
      ItemTemp[type] -= 1;
      newPrice -= this.price[type];
    }

    this.setState({
      item: ItemTemp,
      price: newPrice,
    });
  };

  clearOrder = () => {
    this.setState({
      item: { ...emptyItem },
      price: 3,
    });
  };

  checkOut = () => {
    this.setState({
      ordering: true,
    });
  };

  confirmCheckOut = () => {
    this.props.history.push({
      pathname: "/form",
      state: { orders: { ...this.state.item } },
    });
    this.setState({ loading: false, item: { ...emptyItem }, price: 3 });
  };

  Modals = () => {
    return (
      <Modal>
        {!this.state.loading ? (
          <Summary
            items={this.state.item}
            price={this.state.price}
            cancel={this.DismissModal}
            proceed={this.confirmCheckOut}
          />
        ) : (
          <Loader />
        )}
      </Modal>
    );
  };

  DismissModal = () => {
    if (this.state.ordering) {
      this.setState({
        ordering: false,
      });
    }
  };

  render() {
    return (
      <Aux>
        {this.state.ordering ? this.Modals() : null}
        <div className={styles.emptypadding} onClick={this.DismissModal}>
          <div className={styles.examplegroup}>
            <div className={[styles.centerText, styles.tag].join(" ")}>
              Your Demo Burger
              <br /> Cost: ${this.state.price}
            </div>
            <Example amount={this.state.item} />
          </div>
          <Control
            amount={this.state.item}
            addItem={this.addItem}
            removeItem={this.removeItem}
            control={Object.keys(this.state.item)}
          />
          <div className={styles.centerText}>
            <button onClick={this.clearOrder} className={styles.btn}>
              Clear
            </button>
            <button onClick={this.checkOut} className={styles.btn}>
              Check Out
            </button>
          </div>
        </div>
      </Aux>
    );
  }
}

export default Builder;

import React, { Component } from "react";
import Aux from "../../component/Aux/Aux";
import styles from "./layout.css";
import Burgerheader from "../../component/header/header";
import Builder from "../burgerbuilder/burgerbuilder";
import Order from "../orders/orders";
import { Switch, Route, Redirect } from "react-router-dom";
import Form from "../Forum/forum";

class Layout extends Component {
  state = {
    orderstart: false,
  };

  changeorderState = () => {
    this.setState({
      orderstart: !this.state.orderstart,
    });
  };
  render() {
    return (
      <Aux>
        <div className={styles.background}>
          <Burgerheader />
          <Switch>
            <Route
              path="/builder"
              render={(props) => (
                <Builder {...props} ordercheck={this.changeorderState} />
              )}
            />
            <Route path="/order" component={Order} />
            {this.state.orderstart ? (
              <Route
                path="/form"
                render={(props) => (
                  <Form {...props} ordercheck={this.changeorderState} />
                )}
              />
            ) : (
              <Redirect from="/form" to="/builder" />
            )}
            <Route path="/form" component={Form} />
            <Redirect from="/" to="/builder" />
          </Switch>
        </div>
      </Aux>
    );
  }
}

export default Layout;

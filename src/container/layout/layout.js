import React, { Component } from "react";
import Aux from "../../component/Aux/Aux";
import styles from "./layout.css";
import Burgerheader from "../../component/header/header";
import Builder from "../burgerbuilder/burgerbuilder";
import Order from "../orders/orders";
import { Switch, Route, Redirect } from "react-router-dom";
import Form from "../Forum/forum";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <div className={styles.background}>
          <Burgerheader />
          <Switch>
            <Route path="/builder" component={Builder} />
            <Route path="/order" component={Order} />
            <Route path="/form" component={Form} />
            <Redirect from="/" to="/builder" />
          </Switch>
        </div>
      </Aux>
    );
  }
}

export default Layout;

import React from "react";
import styles from "./orderitem.css";
import "./orderitem.css";

const OrderItem = (props) => {
  let totalprice;
  const keys = Object.keys(props.orderlist);
  const OrderList = keys.map((orderid, index) => {
    totalprice = 3;
    const entries = Object.entries(props.orderlist[orderid]["order"]);
    for (const [name, amount] of entries) {
      totalprice += props.pricetag[name] * amount;
    }
    return (
      <div className={styles.orderrow} key={index}>
        <label>Order# {index + 1}</label>
        <label>meat: {props.orderlist[orderid]["order"]["meat"]}</label>
        <label>salad:{props.orderlist[orderid]["order"]["salad"]}</label>
        <label>cheese:{props.orderlist[orderid]["order"]["cheese"]}</label>
        <label>Bacon: {props.orderlist[orderid]["order"]["bacon"]}</label>
        <label>Price: {totalprice} Dollars</label>
      </div>
    );
  });
  return <div className={styles.bottomborder}>{OrderList}</div>;
};

export default OrderItem;

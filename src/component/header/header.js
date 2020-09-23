import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

const burgerheader = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <h2>Welcome to some stylish burger</h2>
      </div>
      <div className={styles.buttongroup}></div>
      <div className={styles.buttonheader}>
        <Link to="/builder">Builder</Link>
      </div>
      <div className={styles.buttonheader}>
        <Link to="/order">Order</Link>
      </div>
    </div>
  );
};

export default burgerheader;

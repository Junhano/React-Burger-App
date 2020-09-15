import React from "react";
import styles from "./control.css";
import "./control.css";

const Control = (props) => {
  const ControlComponent = props.control.map((item) => {
    let disable = true;
    if (props.amount[item] > 0) {
      disable = false;
    }
    return (
      <div className={styles.row} key={item}>
        <div className={styles.header}>
          <h3 className={styles.center}>
            {item}: {props.amount[item]}
          </h3>
        </div>
        <div className={styles.buttongroup}>
          <button onClick={() => props.addItem(item)}>+</button>
          <button disabled={disable} onClick={() => props.removeItem(item)}>
            -
          </button>
        </div>
      </div>
    );
  });
  return <div className={styles.container}>{ControlComponent}</div>;
};

export default Control;

import React, { Component } from "react";
import styles from "./forum.css";
import InputGroup from "../../component/Inputgroup/inputgroup";
import axios from "../../axios-orders";
import ErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Forum extends Component {
  state = {
    Inputs: {
      fname: {
        value: "",
        setup: {
          label: "First Name",
          type: "text",
          id: "fname",
          name: "fname",
          placeholder: "First name",
        },
      },
      lname: {
        value: "",
        setup: {
          label: "Last Name",
          type: "text",
          id: "lname",
          name: "lname",
          placeholder: "Last name",
        },
      },
      pnumber: {
        value: "",
        setup: {
          label: "Phone number",
          type: "text",
          id: "pnumber",
          name: "pnumber",
          placeholder: "Phone number",
        },
      },
      email: {
        value: "",
        setup: {
          label: "Email",
          type: "email",
          id: "email",
          name: "email",
          placeholder: "Your Email",
        },
      },
      creditcard: {
        value: 0,
        setup: {
          label: "Credit Card Number",
          type: "number",
          id: "creditcard",
          name: "creditcard",
          placeholder: "Credit card number",
        },
      },
    },
  };

  submit = (event) => {
    event.preventDefault();
    const keys = Object.keys(this.state["Inputs"]);
    const personalinformation = {};
    for (const key of keys) {
      personalinformation[key] = this.state["Inputs"][key]["value"];
    }
    const orders = this.props.location.state.orders;
    const submitdata = {
      order: orders,
      personalinfo: personalinformation,
    };

    axios
      .post("order.json", submitdata)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  inputChangeHandler = (event, inputElement) => {
    const Inputss = { ...this.state["Inputs"] };
    Inputss[inputElement]["value"] = event.target.value;
    this.setState({
      ...Inputss,
    });
  };

  render() {
    const keys = Object.keys(this.state["Inputs"]);

    const formgroup = keys.map((inputElement, index) => {
      return (
        <InputGroup
          key={index}
          value={this.state["Inputs"][inputElement]["value"]}
          {...this.state["Inputs"][inputElement]["setup"]}
          onChange={(event) => this.inputChangeHandler(event, inputElement)}
        />
      );
    });
    return (
      <div className={styles.emptypadding}>
        <form onSubmit={this.submit} className={styles.form}>
          {formgroup}
          <button className={styles.order}>Order</button>
        </form>
      </div>
    );
  }
}

export default ErrorHandler(Forum, axios);

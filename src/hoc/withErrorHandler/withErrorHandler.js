import React from "react";
import Modal from "../../component/Modal/Modal";
import Aux from "../../component/Aux/Aux";
import Classes from "./withErrorHandler.css";

const Error = (props) => {
  return (
    <Modal>
      <label className={Classes.label}>Error Happened</label>
      <button className={Classes.button} onClick={props.cancel}>
        Press to ignore
      </button>
    </Modal>
  );
};

const ErrorHandler = (WrappedComponent, axios) => {
  return class extends React.Component {
    state = {
      error: null,
    };
    componentDidMount() {
      axios.interceptors.response.use(null, (error) => {
        this.setState({ error: error });
      });
    }
    ignorerror = () => {
      this.setState({ error: false });
    };

    render() {
      return (
        <Aux>
          {this.state.error ? <Error cancel={this.ignorerror} /> : null}
          <WrappedComponent {...this.props} />;
        </Aux>
      );
    }
  };
};

export default ErrorHandler;

import React from "react";
import classes from "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show === !this.props.show;
  }

  render() {
    return (
      <>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show
              ? "translateY(0px)"
              : "translateY(-100px)",
            display: this.props.show ? "block" : "none"
          }}
        >
          {this.props.children}
        </div>
      </>
    );
  }
}

export default Modal;

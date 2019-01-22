import React from "react";
import classes from "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";

const modal = props => {
  return (
    <>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0px)" : "translateY(-100px)",
          display: props.show ? "block" : "none"
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default modal;

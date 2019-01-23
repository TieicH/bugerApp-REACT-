import React from "react";
import Button from "../../../UI/Button/Button";

class OrderSummary extends React.Component {
  componentWillUpdate() {
    console.log("actualizando ordersummary");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
          {this.props.ingredients[igKey]}
        </li>
      );
    });

    return (
      <>
        <h3>Your Order</h3>
        <p>Delicius burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" click={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" click={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </>
    );
  }
}

export default OrderSummary;

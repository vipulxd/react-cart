import React from "react";
import {useHistory} from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import "../../styles/product.css";
function PaymentComponent(props) {
  const history = useHistory();
  const onKeyPress = token => {
    history.push("/");
  };
  console.log(props);

  return (
    <div>
      <div className="payment-comp">
        <StripeCheckout
          token={onKeyPress}
          name={props.name}
          currency="inr"
          amount={props.price}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
          bitcoin
          alipay
        >
          <button>Buy Now</button>
        </StripeCheckout>
      </div>
    </div>
  );
}
export default PaymentComponent;

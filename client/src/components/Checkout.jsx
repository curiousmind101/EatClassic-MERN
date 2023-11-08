import React from "react";
// import StripeCheckout from "react-stripe-checkout";
import { loadStripe } from "@stripe/stripe-js";
// import { Button } from "flowbite-react";
import { useSelector } from "react-redux";
// import * as dotenv from "dotenv";
// dotenv.config();

const Checkout = ({ address, telephone }) => {
  //Payment Handler

  const cartState = useSelector((state) => state.cartReducer);
  // const currentUser = useSelector((state) => state.userLoginReducer);
  const cartItems = cartState.cartItems;

  const makePayments = async () => {
    const stripe = await loadStripe(
      "pk_test_51O6v30SCTZlpp0ghmYJ1hQG01aBYrubvQzlP3RNSbuGUHXBy2j7dUi40InpmfwRKgtKP3LwewJ3bNG8utohVUN7t00lanNRAlL"
    );

    const completeAddress = { address, telephone };
    const body = {
      products: cartItems,
      address: completeAddress,
    };

    const headers = {
      "Content-type": "application/json",
    };

    const response = await fetch(
      "http://localhost:8080/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();
    // console.log(session);
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

  function paymentHandler() {
    if (localStorage.getItem("currentUser")) {
      makePayments();
    } else {
      window.location.href = "/login";
    }
  }

  return (
    <>
      <button
        onClick={paymentHandler}
        className="hover:bg-orange-500 bg-white border-orange-400 text-orange-500 font-bold rounded-md hover:text-white mx-auto "
      >
        <p>Place Order</p>
      </button>
    </>
  );
};

export default Checkout;

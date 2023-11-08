import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { emptyCart } from "../actions/cartAction";
import axios from "axios";

const Success = () => {
  const dispatch = useDispatch();
  async function Loader() {
    try {
      const cartItems = await useSelector((state) => state.cartReducer);
      const res = await axios.post("/api/orders", { cartItems });
      console.log(res);
      dispatch(emptyCart());
    } catch (error) {}
  }

  useEffect(() => {
    Loader();
  });
  return (
    <div>
      <div className="mt-40 mx-auto bg-green-500 text-center flex-col">
        <h1>Payment succussful</h1>
        <h1>Your order has been placed</h1>
      </div>
      <div>
        <button className="w-6 h-2 bg-white text-orange-500 font-bold border-orange-500 hover:bg-orange-500 hover:text-white">
          Track Order
        </button>
      </div>
    </div>
  );
};

export default Success;

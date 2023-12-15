import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { emptyCart } from "../actions/cartAction";
import { Link } from "react-router-dom";

const Success = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(emptyCart());
  }, [dispatch]);
  return (
    <div>
      <div className="mt-40 mx-auto bg-green-500 text-center flex-col">
        <h1>Payment succussful</h1>
        <h1>Your order has been placed</h1>
      </div>
      <div className="flex justify-center mt-10">
        <Link to="/orders">
          <button className="bg-white text-orange-500 font-bold border-orange-500 hover:bg-orange-500 hover:text-white rounded-md">
            Track Order
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;

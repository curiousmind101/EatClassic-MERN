// import React from "react";

import axios from "axios";

const getOrders = (user) => async (dispatch) => {
  dispatch({ type: "GET_ORDERS_REQUEST" });
  try {
    // console.log(user);
    const orders = await axios.post("/api/payment/orders", user);
    // console.log(orders.data);
    dispatch({ type: "GET_ORDERS_SUCCESS", payload: orders.data });
    localStorage.setItem("orders", JSON.stringify(orders.data));
  } catch (error) {
    dispatch({ type: "GET_ORDERS_FAIL", payload: error });
  }
};
export default getOrders;

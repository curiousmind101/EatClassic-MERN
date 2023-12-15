import React from "react";
import { useSelector, useDispatch } from "react-redux";
import EmptyCart from "../components/EmptyCart";
import { addToCart, deleteFromCart } from "../actions/cartAction";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Checkout from "../components/Checkout";

// import { BsFillCartFill } from "react-icons/bs";

const Cart = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch();
  // console.log(cartItems.length);
  let subTotal = cartItems.reduce((x, item) => x + item.value, 0);
  // let Total = parseFloat(subTotal + subTotal * 0.05 + 49).toFixed(2);
  return (
    <div>
      <div className="flex text-black justify-center text-2xl mt-36 lg:mt-24">
        <h1 className="font-bold">Your cart</h1>
      </div>
      <div className="flex justify-center mt-2 mb-10">
        <hr className="bg-gray-700 w-4/5 lg:w-2/3 h-0.5" />
      </div>
      {cartItems.length ? (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-center">
              <div className="border shadow-lg rounded-lg w-4/5 lg:w-2/3 p-4 m-4">
                <div className="flex justify-between">
                  <div className="m-2 font-semibold">{item.name}</div>
                  <div className="">
                    <div className="flex items-center justify-center text-center text-white ">
                      <p
                        onClick={() => {
                          if (item.quantity === 1) {
                            dispatch(deleteFromCart(item));
                          } else {
                            dispatch(addToCart(item, item.quantity - 1));
                          }
                        }}
                        className="bg-orange-500 w-6 p-1 rounded-l-md text-white"
                      >
                        <FaMinus />
                      </p>
                      <p className="bg-white w-6 p-1 text-black">
                        {item.quantity}
                      </p>
                      <p
                        onClick={() => {
                          dispatch(addToCart(item, item.quantity + 1));
                        }}
                        className="bg-orange-500 w-6 p-1 rounded-r-md text-white"
                      >
                        <FaPlus />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="m-2 font-semibold">
                    ₹{item.price[0]}
                    <span className="text-orange-600 text-sm">
                      &nbsp; x{item.quantity}
                    </span>
                  </div>
                  <div className="m-2 font-semibold">₹{item.value}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <EmptyCart />
      )}
      {cartItems.length && (
        <div className="border shadow-lg rounded-lg w-4/5 lg:w-2/3 p-4 m-4 mx-auto">
          <div className="flex align-middle justify-between">
            <hr className="bg-gray-500 w-full mx-auto h-0.5 mt-3"></hr>
            <h1 className="text-gray-800 font-semibold text-xl mx-4">
              SUMMERY
            </h1>
            <hr className="bg-gray-500 w-full mx-auto h-0.5 mt-3"></hr>
          </div>
          <div className="flex justify-between">
            <div className="m-2 font-semibold">
              Total{" "}
              <span className="text-gray-600 font-light">
                (including all taxes and delivery charges)
              </span>
            </div>
            <div className="m-2 font-semibold flex">₹{subTotal}</div>
          </div>
          <div>
            <p className="text-orange-500 font-semibold">
              **order cannot be cancelled once placed
            </p>
          </div>
          <div className="flex">
            <Checkout />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

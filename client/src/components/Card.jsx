import React, { useState } from "react";
import { BiCartAdd } from "react-icons/bi";
import { addToCart, deleteFromCart } from "../actions/cartAction";
import { useDispatch } from "react-redux";
import { FaMinus, FaPlus } from "react-icons/fa6";

const Card = ({ item }) => {
  var [quant, setQuant] = useState(0);
  // var [value, setValue] = useState(0);
  const dispatch = useDispatch();

  function addToCartHandler(quant) {
    dispatch(addToCart(item, quant));
  }
  function deleteFromCartHandler() {
    dispatch(deleteFromCart(item));
  }
  function increase() {
    addToCartHandler(quant + 1);
    setQuant(quant + 1);
    // setValue((cart + 1) * item.price);
  }
  function decrease() {
    if (quant === 1) {
      deleteFromCartHandler(item);
    } else {
      addToCartHandler(quant - 1);
    }
    setQuant(quant - 1);
    // setValue((cart - 1) * item.price);
  }
  function handleClick() {
    increase();
  }

  function showCart() {
    if (quant) {
      return (
        <div className="flex items-center justify-center text-center gap-1 text-white">
          <div className="flex items-center justify-center text-center text-white ">
            <p
              onClick={decrease}
              className="bg-orange-500 w-6 p-1 rounded-l-md text-white"
            >
              <FaMinus />
            </p>
            <p className="bg-white w-6 p-1 text-black">{quant}</p>
            <p
              onClick={increase}
              className="bg-orange-500 w-6 p-1 rounded-r-md text-white"
            >
              <FaPlus />
            </p>
          </div>
        </div>
      );
    }
    return (
      <p
        onClick={handleClick}
        className="bg-orange-500 text-white p-1 rounded-lg flex items-center"
      >
        <BiCartAdd /> Add
      </p>
    );
  }
  return (
    <>
      <div
        // key={index}
        className="border shadow-lg rounded-lg hover:scale-105 duration-300 rounded-t-lg"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-[200px] object-cover rounded-t-lg"
        />

        <div className="flex items-center justify-between px-2 py-4">
          <p>
            <span className="bg-orange-500 text-white p-1 rounded-lg">
              ₹{item.price[0]}
            </span>
          </p>
          <p className="font-bold">{item.name}</p>
          <div className="cursor-pointer">{showCart()}</div>
          {/* <p>{quant}</p> */}
        </div>
      </div>
    </>
  );
};

export default Card;

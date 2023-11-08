export const addToCart = (dish, quantity) => (dispatch, getState) => {
  var cartItem = {
    _id: dish._id,
    name: dish.name,
    category: dish.category,
    image: dish.image,
    price: dish.price,
    quantity: quantity,
    value: dish.price[0] * quantity,
  };
  dispatch({ type: "ADD_TO_CART", payload: cartItem });
  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartReducer.cartItems)
  );
};

export const deleteFromCart = (dish) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: dish });
  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartReducer.cartItems)
  );
};

export const emptyCart = () => (dispatch) => {
  dispatch({ type: "EMPTY_CART" });
  localStorage.removeItem("cartItems");
};

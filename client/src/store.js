import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { getAlldishReducer } from "./reducers/dishesReducer";
import { cartReducer } from "./reducers/cartReducer";
import { userRegisterReducer, userLoginReducer } from "./reducers/userReducer";
import orderReducer from "./reducers/orderReducer";

const rootReducer = combineReducers({
  getAlldishReducer: getAlldishReducer,
  cartReducer: cartReducer,
  userRegisterReducer: userRegisterReducer,
  userLoginReducer: userLoginReducer,
  orderReducer: orderReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const orders = localStorage.getItem("orders")
  ? JSON.parse(localStorage.getItem("orders"))
  : [];
const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  userLoginReducer: {
    currentUser: currentUser,
  },
  orderReducer: {
    orders: orders,
  },
};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

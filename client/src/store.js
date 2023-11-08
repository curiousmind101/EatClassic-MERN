import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { getAlldishReducer } from "./reducers/dishesReducer";
import { cartReducer } from "./reducers/cartReducer";
import { userRegisterReducer, userLoginReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({
  getAlldishReducer: getAlldishReducer,
  cartReducer: cartReducer,
  userRegisterReducer: userRegisterReducer,
  userLoginReducer: userLoginReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  userLoginReducer: {
    currentUser: currentUser,
  },
};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

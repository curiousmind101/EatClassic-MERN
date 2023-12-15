const orderReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case "GET_ORDERS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_ORDERS_SUCCESS":
      return {
        orders: action.payload,
        loading: false,
      };
    case "GET_ORDERS_FAIL":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default orderReducer;

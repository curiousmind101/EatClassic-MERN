export const getAlldishReducer = (state = { dishes: [] }, action) => {
  switch (action.type) {
    case "GET_DISHES_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_DISHES_SUCCESS":
      // console.log(action.payload);
      return {
        dishes: action.payload,
        loading: false,
      };
    case "GET_DISHES_FAIL":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

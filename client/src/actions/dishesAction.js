import axios from "axios";
export const getAllDishes = () => async (dispatch) => {
  dispatch({ type: "GET_DISHES_REQUEST" });
  try {
    const res = await axios.get("/api/dishes/getAllDishes");
    // console.log(res);
    dispatch({ type: "GET_DISHES_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "GET_DISHES_FAIL", payload: error });
  }
};

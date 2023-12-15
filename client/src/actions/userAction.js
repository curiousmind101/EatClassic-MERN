import axios from "axios";

export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });
  try {
    const res = await axios.post("/api/user/register", user);
    console.log(res);
    dispatch({ type: "USER_REGISTER_SUCCESS" });
  } catch (error) {
    // console.log();
    alert(`User Registration Faild\n${error.response.data.message}`);
    dispatch({ type: "USER_REGISTER_FAIL", payload: error });
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });
  try {
    const res = await axios.post("/api/user/login", user);
    // console.log(res);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: res.data });
    localStorage.setItem("currentUser", JSON.stringify(res.data));
    window.location.href = "/";
  } catch (error) {
    alert("Invalid username or password");
    dispatch({ type: "USER_LOGIN_FAIL", payload: error });
  }
};

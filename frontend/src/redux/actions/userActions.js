import {
  ADD_USER,
  DELETE_USER,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  USER_DETAIL,
  LOGOUT_SUCCESS,
} from "./types";
import axios from "axios";

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

export const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: id,
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = (message) => ({
  type: LOGIN_FAILURE,
  message: message,
});

export const getUserDetail = (data) => ({
  type: USER_DETAIL,
  info: data,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});
/**********************************************
 * Get User Information
 * ==================================
 * The purpose of this function is to grab the data from the backend, passing in the token via local storage
 *
 * Output:
 *  1. If successful, dispatches getUserDetail, passing in the response
 *  2. If not successful, console.log failure
 ***********************************************/
export function getUserInfoThunk() {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_SERVER}/api/data`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            "token"
          )}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.data == null) {
          console.log("failure");
        } else {
          dispatch(getUserDetail(response.data));
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };
}

/**********************************************
 * Login User Thunk
 * ==================================
 * The purpose of this function is to verify the user's email and password; if there is a response with token, then it will dispatch loginSuccess() as well as the set token in local storage
 *
 * Input: email, password
 * Output:
 *  1. loginFailure
 *
 *  2. loginSuccess (set token as local storage)
 ***********************************************/
export function loginUserThunk(email, password) {
  return (dispatch) => {
    console.log(
      "Thunk received email and password! ",
      "Email: ",
      email,
      "Password: ",
      password
    );
    console.log(
      "Alright, going to post this request now, so then it should go to the dear database to post it accordingly"
    );
    return axios
      .post(`http://localhost:8080/api/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log("Trying to login: ", response);
        if (response.data == null) {
          dispatch(
            loginFailure("Didn't get any data back")
          );
        } else if (!response.data.token) {
          dispatch(loginFailure("Didn't get any token"));
        } else {
          localStorage.setItem(
            "token",
            response.data.token
          );
          dispatch(loginSuccess());
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };
}

/**********************************************
 * Logout Thunk
 * ==================================
 * Input:
 * Output:
 ***********************************************/

export function logoutThunk() {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch(logoutSuccess());
  };
}

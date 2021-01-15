import {
  ADD_USER,
  DELETE_USER,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  USER_DETAIL,
  LOGOUT_SUCCESS,
} from "../actions/types";

const initialState = {
  isAuthenticated:
    false || localStorage.getItem("token") != null,
  data: "",
  users: [
    {
      id: 1,
      name: "Lesley",
      email: "lesleyc@bu.edu",
      password: "password",
    },
    {
      id: 2,
      name: "Ryan",
      email: "ryan@bu.edu",
      password: "password",
    },
    {
      id: 3,
      name: "Robert",
      email: "robert@bu.edu",
      password: "password",
    },
  ],
};
/**********************************************
 * User Reducer
 * ==================================
 * 1. ADD USER
 * - Connected to SignupPage
 * - Pass in name, email and password
 *
 * 2.
 ***********************************************/
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        isAuthenticated: false,
        users: [
          ...state,
          { ...action.payload, id: generateID(state) },
        ],
      };
    case DELETE_USER:
      let allUsers = state.users.filter(
        (user) => user.id !== action.payload
      );
      return {
        isAuthenticated: false,
        users: allUsers,
      };
    case LOGIN_FAILURE:
      return { state };
    case LOGIN_SUCCESS:
      return {
        isAuthenticated: true,
      };
    case USER_DETAIL:
      return {
        ...state,
        data: action.info,
        isAuthenticated: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
let generateID = (users) => {
  let lastId = 0;
  if (users.length > 0) {
    lastId = users[users.length - 1].id;
  }
  return ++lastId;
};

export default userReducer;

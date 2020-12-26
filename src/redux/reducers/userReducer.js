import { ADD_USER, DELETE_USER } from "../actions/types";

const initialState = [
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
];
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return [
        ...state,
        { ...action.payload, id: generateID(state) },
      ];
    case DELETE_USER:
      return state.filter(
        (user) => user.id !== action.payload
      );
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

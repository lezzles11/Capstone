import {
  ADD_PROJECT,
  EDIT_PROJECT,
  DELETE_PROJECT,
} from "../actions/types";

const initialState = [
  {
    id: 1,
    user_id: 1,
    done: false,
    name: "Project Management",
    deadline: "Jan 12, 2021",
    color: "green",
    purpose: "The purpose of this project is to ",
    friendOneEmail: "anubhav@xccelerate.co",
    friendTwoEmail: "samo@xccelerate.co",
  },
  {
    id: 2,
    user_id: 1,
    done: false,
    name: "UDemy Data Structures",
    deadline: "Feb 12, 2021",
    purpose:
      "The purpose of this project is to people better problem solve.",
    color: "orange",
    friendOneEmail: "anubhav@xccelerate.co",
    friendTwoEmail: "samo@xccelerate.co",
  },
  {
    id: 3,
    user_id: 1,
    done: false,
    name: "Finish Videos",
    deadline: "March 12, 2021",
    purpose:
      "The purpose of this project is to people better problem solve.",
    color: "pink",
    friendOneEmail: "anubhav@xccelerate.co",
    friendTwoEmail: "samo@xccelerate.co",
  },
  {
    id: 4,
    user_id: 1,
    done: false,
    name: "Hygge App",
    deadline: "",
    purpose: "",
    color: "blue",
    friendOneEmail: "anubhav@xccelerate.co",
    friendTwoEmail: "samo@xccelerate.co",
  },
];

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return [
        ...state,
        { ...action.payload, id: generateID(state) },
      ];
    case DELETE_PROJECT:
      return state.filter(
        (project) => project.id !== action.payload
      );

    // #TODO: GET COMPLETED PROJECTS
    // #TODO: GET CURRENT PROJECTS
    default:
      return state;
  }
};
let generateID = (projects) => {
  let lastId = 0;
  if (projects.length > 0) {
    lastId = projects[projects.length - 1].id;
  }
  return ++lastId;
};

export default projectReducer;

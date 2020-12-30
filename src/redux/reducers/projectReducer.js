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
    image_url:
      "https://mdbootstrap.com/img/Photos/Others/images/50.jpg",
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
    image_url:
      "https://mdbootstrap.com/img/Photos/Others/images/49.jpg",
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
    image_url:
      "https://mdbootstrap.com/img/Photos/Others/images/48.jpg",
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
    done: true,
    image_url:
      "https://mdbootstrap.com/img/Photos/Others/images/47.jpg",
    name: "Hygge App",
    deadline: "",
    purpose:
      "We wanted to create a platform in which people could have more authentic conversations.",
    color: "blue",
    friendOneEmail: "anubhav@xccelerate.co",
    friendTwoEmail: "samo@xccelerate.co",
  },
  {
    id: 5,
    user_id: 1,
    done: true,
    image_url:
      "https://mdbootstrap.com/img/Photos/Others/images/33.jpg",
    name: "Twitter",
    deadline: "",
    purpose:
      "We wanted to create a platform in which people could tweet their thoughts in 250 words or less because people talk too much.",
    color: "blue",
    friendOneEmail: "anubhav@xccelerate.co",
    friendTwoEmail: "samo@xccelerate.co",
  },
  {
    id: 6,
    user_id: 1,
    done: true,
    image_url:
      "https://mdbootstrap.com/img/Photos/Others/images/34.jpg",
    name: "Facebook",
    deadline: "",
    purpose:
      "This project saved the world. You might have heard of it.",
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

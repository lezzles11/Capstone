import {
  ADD_FEATURE,
  EDIT_FEATURE,
  DELETE_FEATURE,
} from "../actions/types";

const initialState = [
  {
    id: 1,
    title: "User Interface",
    keyInfo: "",
    tools: "MDBootstrap, Bootstrap",
    description:
      "Users will be able to visualize the entire user interface and understand how the user flow works.",
    notes: "",
    structure: "",
    start: "2020-12-18" + "T12:00:00",
    end: "2020-12-20" + "T12:00:00",
  },
  {
    id: 2,
    title: "Tests",
    keyInfo: "",
    tools: "Enzyme, Jest",
    description:
      "Users will be able to understand how to test react, react-redux, express, and database components.",
    notes: "",
    structure: "",
    start: "2020-12-21" + "T12:00:00",
    end: "2020-12-23" + "T12:00:00",
  },
  {
    id: 3,
    title: "Database",
    keyInfo: "",
    tools: "Knex, Postgres",
    description:
      "Users will be able to understand how to construct a user flow",
    notes: "",
    structure: "",
    start: "2020-12-24" + "T12:00:00",
    end: "2020-12-25" + "T12:00:00",
  },
  {
    id: 4,
    title: "API",
    keyInfo: "",
    tools: "Express, Axios",
    description:
      "Users will be able to see how the routes connect with one another.",
    notes: "",
    structure: "",
    start: "2020-12-26" + "T12:00:00",
    end: "2020-12-28" + "T12:00:00",
  },
  {
    id: 5,
    title: "Redux Store (State management)",
    keyInfo: "",
    tools: "React-Redux, Redux",
    description:
      "Users will be able to understand how state is passed throughout the application.",
    notes: "",
    structure: "",
    start: "2020-12-29" + "T12:00:00",
    end: "2020-12-31" + "T12:00:00",
  },
  {
    id: 6,
    title: "Authentication",
    keyInfo: "",
    tools: "JWT",
    description:
      "Users will be able to understand how users are authenticated.",
    notes: "",
    structure: "",
    start: "2021-01-01" + "T12:00:00",
    end: "2021-01-03" + "T12:00:00",
  },
  {
    id: 7,
    title: "Payment",
    keyInfo: "",
    tools: "Stripe",
    description:
      "Users will be able how to implement payment for their applications.",
    notes: "",
    structure: "",
    start: "2021-01-04" + "T12:00:00",
    end: "2021-01-06" + "T12:00:00",
  },
  {
    id: 8,
    title: "Deployment",
    keyInfo: "",
    tools: "AWS",
    description:
      "Users will be able to understand how to deploy their applications.",
    notes: "",
    structure: "",
    start: "2021-01-07" + "T12:00:00",
    end: "2021-01-09" + "T12:00:00",
  },
];

const featureReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      return [
        ...state,
        { ...action.payload, id: generateID(state) },
      ];
    case DELETE_FEATURE:
      return state.filter(
        (feature) => feature.id !== action.payload
      );
    default:
      return state;
  }
};
let generateID = (orders) => {
  let lastId = 0;
  if (orders.length > 0) {
    lastId = orders[orders.length - 1].id;
  }
  return ++lastId;
};

export default featureReducer;

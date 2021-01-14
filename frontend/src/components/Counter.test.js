import React from "react";

import { createStore } from "redux";
// connects component to redux store
import { Provider } from "react-redux";
// import functions from react-testing-library
import {
  render,
  fireEvent,
  cleanup,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Counter from "./Counter";

/**********************************************
 * Connecting with this component
 * ==================================
 * export default connect(
  (state) => ({
    // this is props
    count: state.count,
  }),
  (dispatch) => ({
    // event handler one => call action
    increment: () => dispatch({ type: "INCREMENT" }),
    // event handler two => call action
    decrement: () => dispatch({ type: "DECREMENT" }),
  })
)(Counter);
 ***********************************************/

// Clean up after
afterEach(cleanup);

/**********************************************
 *
 * =================================
 * __ Provide a starting state for props
 * __
 ***********************************************/
const startingState = { count: 0 };
function reducer(state = startingState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

function renderWithRedux(
  component,
  {
    initialState,
    store = createStore(reducer, initialState),
  } = {}
) {
  return {
    ...render(
      <Provider store={store}>{component}</Provider>
    ),
  };
}
describe("Testing Counter ", () => {
  it("renders with redux", () => {
    const { getByTestId } = renderWithRedux(<Counter />);
    // Find elements that don't necessarily have test we can search for
    // In your component, add a data-testid to allow the react testing library to find it easily
    // sees whats inside the count
    expect(getByTestId("count")).toHaveTextContent("0");
  });
  it("can increment", () => {
    const { getByTestId, getByText } = renderWithRedux(
      <Counter />
    );
    // activate the fire event -> gets the text from the component that has + sign
    fireEvent.click(getByText("+"));
    // expect the count to then have text content of 1
    expect(getByTestId("count")).toHaveTextContent("1");
  });
});

import React from "react";

// Connects your react components to redux
import { connect } from "react-redux";

function Counter({ count, increment, decrement }) {
  return (
    <div>
      <button
        type="button"
        onClick={increment}
        className="btn btn-outline-dark waves-effect"
      >
        +
      </button>
      <div data-testid="count">{count}</div>
      <button
        onClick={decrement}
        type="button"
        className="btn btn-outline-dark waves-effect"
      >
        -
      </button>
    </div>
  );
}

// The first argument is state -> props
// Identify the props that are in your component:
/**********************************************
 * To Do
 * ==================================
 * __ Identify the props in your component
 * __ Identify the functions in your component
 * __ Place props in first argument
 * __ Place functions in second argument
 * __ Pass in component
 ***********************************************/
// The second argument are functions ->

export default connect(
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

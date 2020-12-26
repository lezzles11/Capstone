import React from "react";
import UserList from "./components/UserList";
export default class PlaygroundPage extends React.Component {
  render() {
    return (
      <div>
        Playground Page
        <UserList />
      </div>
    );
  }
}

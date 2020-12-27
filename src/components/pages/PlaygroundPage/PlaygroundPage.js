import React from "react";
import UserList from "./components/UserList";
import ExpandTimeline from "../ProjectPage/components/ExpandTimeline";
export default class PlaygroundPage extends React.Component {
  render() {
    return (
      <div>
        Playground Page
        <UserList />
        <ExpandTimeline />
      </div>
    );
  }
}

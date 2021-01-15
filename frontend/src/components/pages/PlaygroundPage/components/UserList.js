import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteUser } from "../../../../redux/actions/userActions";
import PropTypes from "prop-types";
class UserList extends Component {
  deleteUser = (event) => {
    console.log(
      parseInt(event.target.getAttribute("data-id"))
    );
    this.props.deleteUser(
      parseInt(event.target.getAttribute("data-id"))
    );
  };
  loadUsers = (users) => {
    let userList = [];

    for (let i = 0; i < users.length; i++) {
      console.log(users[i]);
      userList.push(
        <div className="card">
          <div
            className="card-body"
            key={i.toString()}
          ></div>
          Name: {users[i].name}
          Email: {users[i].email}
          Password: {users[i].password}
          <button
            type="button"
            data-id={users[i].id}
            onClick={this.deleteUser}
            className="btn btn-outline-dark waves-effect"
          >
            My Favorite Button
          </button>
        </div>
      );
    }
    return userList;
  };
  render() {
    let users = this.props.users;
    let isAuthenticated = this.props.isAuthenticated;

    return (
      <div>
        {this.loadUsers(users)}
        hello
        <h3>I am authenticated: {isAuthenticated}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users.users,
  isAuthenticated: state.users.isAuthenticated,
});
export default connect(mapStateToProps, { deleteUser })(
  UserList
);

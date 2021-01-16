/**********************************************
 * Queries
 * ==================================
 * The point here is to ensure that the developer can add, edit, delete and grab various users from the database.
 ***********************************************/
const connection = require("../connection");
const readQuery = require("./utilities");

/**********************************************
 * Add User
 * ==================================
 ***********************************************/
function addUser(user, database = connection) {
  return database("users")
    .insert(user)
    .then(() => {
      console.log("Inserted User: ", user);
    });
}

let postUserObject = {
  name: "Sam",
  email: "sam@xccelerate.co",
  password: "newPassword",
};

addUser(postUserObject);
/**********************************************
 * Get User
 * ==================================
 ***********************************************/
function getUser(id, database = connection) {
  return database("users").where({ id: id });
}

/**********************************************
 * Get All Users
 * ==================================
 ***********************************************/

// The purpose of this function is to deconstruct the query
function makeUser(eachUserRow) {
  return eachUserRow.map((eachRow) => ({
    id: eachRow.id,
    name: eachRow.name,
    email: eachRow.email,
    password: eachRow.password,
  }));
}

function getAllUsers(database = connection) {
  let allUsers = database("users").select(
    "id",
    "name",
    "email",
    "password"
  );
  return allUsers.then((eachRow) => {
    console.log(makeUser(eachRow));
    return makeUser(eachRow);
  });
}

/**********************************************
 * Edit User
 * ==================================
 ***********************************************/
function editUser(userId, user, database = connection) {
  return database("users")
    .where({ id: userId })
    .update(user)
    .then(() => {
      console.log("updated user");
    });
}

/**********************************************
 * Delete User
 * ==================================
 ***********************************************/
function deleteUser(id, database = connection) {
  return database("users")
    .where({ id: id })
    .del()
    .then(() => {
      console.log("deleted user");
    });
}

module.exports = {
  addUser,
  getUser,
  getAllUsers,
  editUser,
  deleteUser,
};

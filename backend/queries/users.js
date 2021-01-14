/**********************************************
 * Queries
 * ==================================
 * The point here is to ensure that the developer can add, edit, delete and grab various users from the database.
 ***********************************************/

const connection = require("../connection");
function readQuery(query) {
  return query
    .then((rows) => {
      console.log(rows);
    })
    .catch((error) => {
      console.log(error);
    });
}

function makeUser(eachUserRow) {
  return eachUserRow.map((eachRow) => ({
    id: eachRow.id,
    name: eachRow.name,
    email: eachRow.email,
    password: eachRow.password,
  }));
}

function postUserByStrings(
  id,
  name,
  email,
  password,
  database = connection
) {
  let newUser = {
    id: id,
    name: name,
    email: email,
    password: password,
  };
  return database("users")
    .insert(newUser)
    .then(() => {
      console.log("inserted new user");
    });
}
/**********************************************
 * Why isn't this working?
 * ==================================
 *
 ***********************************************/
function postUserByObject(user, database = connection) {
  return database("users")
    .insert(user)
    .then(() => {
      console.log("inserted");
    });
}

// console.log(postUserByObject(postUserObject));
function editUserByObject(
  userId,
  user,
  database = connection
) {
  return database("users")
    .where({ id: userId })
    .update(user)
    .then(() => {
      console.log("updated user");
    });
}
let postUserObject = {
  id: 4,
  name: "Sam",
  email: "sam@xccelerate.co",
  password: "extraPassword",
};
editUserByObject(4, postUserObject);
function deleteUserById(id, database = connection) {
  return database("users")
    .where({ id: id })
    .del()
    .then(() => {
      console.log("deleted user");
    });
}

deleteUserById(4);
// get user by id works
// console.log(readQuery(getUserById(1)));

// get user by user object works
// console.log(
//   readQuery(
//     getUserByObject({
//       id: 2,
//       name: "Ryan",
//       email: "ryan@xccelerate.co",
//       password: "password",
//     })
//   )
// );

// get all users
// console.log(readQuery(getAllUsers()));

/**********************************************
 * Works
 * ==================================
 ***********************************************/
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
getAllUsers();

/**********************************************
 *
 * ==================================
 ***********************************************/
// works
function getUserByObject(user, database = connection) {
  let id = user.id;
  return database("users").where({ id: id });
}
// works, when passing this into readQuery
function getUserById(id, database = connection) {
  return database("users").where({ id: id });
}

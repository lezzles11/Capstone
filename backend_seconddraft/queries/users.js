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
function userExists(email, database = connection) {
  return database("users")
    .count("id as n")
    .where("email", email)
    .then((count) => {
      return count[0].n > 0;
    });
}

function addUser(user, database = connection) {
  return userExists(user.email, database)
    .then((exists) => {
      if (exists) {
        return Promise.reject(new Error("User Exists"));
      }
    })
    .then(() => {
      return database("users")
        .insert(user)
        .then(() => {
          console.log("Inserted User: ", user);
        });
    });
}

// let postUserObject = {
//   name: "Lesley",
//   email: "lesley@xccelerate.co",
//   password: "newPassword",
// };

// addUser(postUserObject);
/**********************************************
 * Get User
 * ==================================
 ***********************************************/
function getUser(id, database = connection) {
  return database("users").where({ id: id }).first();
}

// // console.log(getUser(4));
// readQuery.readQuery(getUser(1));

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

getAllUsers();
/**********************************************
 * Edit User
 * ==================================
 ***********************************************/

function editUser(
  userId,
  email,
  currentPassword,
  newPassword,
  database = connection
) {
  return getUser(userId)
    .then((user) => {
      if (!user) {
        return Promise.reject(
          new Error("user does not exist")
        );
      }
      if (
        currentPassword !== user.password ||
        email !== user.email
      ) {
        return Promise.reject(
          new Error("email or password is not correct")
        );
      }
      return Promise.resolve(user);
    })
    .then(() => {
      return database("users")
        .where({ id: userId })
        .update({ password: newPassword })
        .then(() => {
          console.log("Successfully updated user password");
        });
    });
}

// readQuery.readQuery(
//   editUser(
//     5,
//     "lesley@xccelerate.co",
//     "newPassword",
//     "updatedPassword"
//   )
// );

/**********************************************
 * Delete User
 * ==================================
 ***********************************************/
function deleteUser(id, database = connection) {
  return database("users")
    .where({ id: id })
    .del()
    .then(() => {
      console.log("Deleted User!");
    });
}

// deleteUser(2);
// getAllUsers();
module.exports = {
  addUser,
  getUser,
  getAllUsers,
  editUser,
  deleteUser,
};

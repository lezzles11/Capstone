let postUserObject = {
  id: 4,
  name: "Sam",
  email: "sam@xccelerate.co",
  password: "newPassword",
};

let postTaskObject = {
  id: 5,
  user_id: 2,
  project_id: 2,
  feature_id: 2,
  task: "task",
  done: false,
  start: new Date(2020, 1, 1),
  end: new Date(2021, 1, 1),
};

let postProjectObject = {
  id: 5,
  user_id: 2,
  name: "project name",
  done: false,
  image_url: "image_url",
  deadline: new Date(2020, 1, 1),
  color: "green",
  purpose: "purpose",
  friendOneEmail: "emailOne@xccelerate.co",
  friendTwoEmail: "emailTwo@xccelerate.co",
};

let postFeatureObject = {
  id: 2,
  user_id: 1,
  project_id: 1,
  title: "title",
  done: false,
  keyInfo: "key info here",
  tools: "tools",
  description: "description 2",
  notes: "notes2",
  structure: "structure",
  start: new Date(2021, 1, 1),
  end: new Date(2022, 1, 1),
};

// get one
function getUserByObject(user, database = connection) {
  let id = user.id;
  return database("users").where({ id: id });
}
// works, when passing this into readQuery
function getUserById(id, database = connection) {
  return database("users").where({ id: id });
}

// get all
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
function addTask(task, database = connection) {
  return database("tasks")
    .insert(task)
    .then(() => {
      console.log("inserted");
    });
}

// edit one
function editTask(taskId, task, database = connection) {
  return database("tasks")
    .where({ id: taskId })
    .update(task)
    .then(() => {
      console.log("updated");
    });
}

// delete
function deleteTask(taskId, database = connection) {
  return database("tasks")
    .where({
      id: taskId,
    })
    .del()
    .then(() => {
      console.log("deleted");
    });
}


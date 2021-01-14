const connection = require("../connection");

function readQuery(query) {
  return query
    .then((rows) => {
      console.log(rows[0]);
    })
    .catch((error) => {
      console.log(error);
    });
}

function makeProject(eachProjectRow) {
  return eachProjectRow.map((eachRow) => ({
    id: eachRow.id,
    user_id: eachRow.user_id,
    name: eachRow.name,
    done: eachRow.done,
    image_url: eachRow.image_url,
    deadline: eachRow.deadline,
    color: eachRow.green,
    purpose: eachRow.purpose,
    friendOneEmail: eachRow.friendOneEmail,
    friendTwoEmail: eachRow.friendTwoEmail,
  }));
}

function getAllProjects(database = connection) {
  let allProjects = database("projects").select(
    "id",
    "user_id",
    "name",
    "done",
    "image_url",
    "deadline",
    "color",
    "purpose",
    "friendOneEmail",
    "friendTwoEmail"
  );
  return allProjects.then((eachRow) => {
    console.log(makeProject(eachRow));
    return makeProject(eachRow);
  });
}
//getAllProjects();
function getProjectById(projectId, database = connection) {
  return database("projects").where({ id: projectId });
}

// Get past projects works
function getPastProjects(database = connection) {
  let allProjects = database("projects")
    .select(
      "id",
      "user_id",
      "name",
      "done",
      "image_url",
      "deadline",
      "color",
      "purpose",
      "friendOneEmail",
      "friendTwoEmail"
    )
    .where("done", "=", true);
  return allProjects.then((eachRow) => {
    console.log(makeProject(eachRow));
    return makeProject(eachRow);
  });
}
// getPastProjects()

// Get current projects
function getCurrentProjects(database = connection) {
  let allProjects = database("projects")
    .select(
      "id",
      "user_id",
      "name",
      "done",
      "image_url",
      "deadline",
      "color",
      "purpose",
      "friendOneEmail",
      "friendTwoEmail"
    )
    .where("done", "=", false);
  return allProjects.then((eachRow) => {
    console.log(makeProject(eachRow));
    return makeProject(eachRow);
  });
}
// getCurrentProjects();
// query for projects where done = false

function editProject(project, database = connection) {
  return database("projects")
    .where({ id: project.id })
    .update(project)
    .then(() => {
      console.log("updated project");
    });
}

function addProject(project, database = connection) {
  return database("projects")
    .insert(project)
    .then(() => {
      console.log("inserted project");
    });
}
function getAllUserProjects(userId, database = connection) {
  let allProjects = database("projects")
    .select(
      "id",
      "user_id",
      "name",
      "done",
      "image_url",
      "deadline",
      "color",
      "purpose",
      "friendOneEmail",
      "friendTwoEmail"
    )
    .where("user_id", "=", userId);
  return allProjects.then((eachRow) => {
    console.log(makeProject(eachRow));
    return makeProject(eachRow);
  });
}

function deleteProjectById(
  projectId,
  database = connection
) {
  return database("projects")
    .where({
      id: projectId,
    })
    .del()
    .then(() => {
      console.log("deleted project");
    });
}

let postProjectObject = {
  id: 4,
  user_id: 2,
  name: "new project name",
  done: false,
  image_url: "image_url",
  deadline: new Date(2020, 1, 1),
  color: "green",
  purpose: "purpose",
  friendOneEmail: "emailOne@xccelerate.co",
  friendTwoEmail: "emailTwo@xccelerate.co",
};

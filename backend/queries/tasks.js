const connection = require("../connection");
const knexfile = require("../knexfile");

/**********************************************
 * Tasks
 * ==================================
 * - [ ] Getting all tasks
 * - [ ] Getting all tasks from feature id
 * - [ ] Getting all tasks from feature object
 * - [ ] Getting all tasks from user
 * - [ ] Getting all tasks from project
 * - [ ] Deleting task
 * - [ ] Getting tasks
 * - [ ]
 ***********************************************/

function readQuery(query) {
  return query
    .then((rows) => {
      console.log(rows[0]);
    })
    .catch((error) => {
      console.log(error);
    });
}
function getTasksByFeatureId(
  featureId,
  database = connection
) {}

// Passing in a feature will
function getTasksByFeatureObject(
  feature,
  database = connection
) {}

function getTaskById(taskId, database = connection) {
  return database("tasks")
    .select(
      "id",
      "user_id",
      "project_id",
      "feature_id",
      "task",
      "done",
      "start",
      "end"
    )
    .where("id", taskId);
}
function makeTask(eachTaskRow) {
  return eachTaskRow.map((eachRow) => ({
    id: eachRow.id,
    user_id: eachRow.user_id,
    project_id: eachRow.project_id,
    feature_id: eachRow.feature_id,
    task: eachRow.task,
    done: eachRow.done,
    start: eachRow.start,
    end: eachRow.end,
  }));
}
let newTask = {
  id: 4,
  user_id: 1,
  project_id: 1,
  feature_id: 1,
  task: "what is going on",
  done: true,
  start: new Date(2020, 1, 1),
  end: new Date(2020, 1, 2),
};
/**********************************************
 * Add Task Works
 * ==================================
 ***********************************************/
function addTask(task, database = connection) {
  return database("tasks")
    .insert(task)
    .then(() => {
      console.log("inserted");
    });
}

// connection("tasks");
// addTask(newTask);

function editTask(taskId, task, database = connection) {
  return database("tasks")
    .where({ id: taskId })
    .update(task)
    .then(() => {
      console.log("updated");
    });
}

let updatedTask = {
  id: 4,
  user_id: 1,
  project_id: 1,
  feature_id: 1,
  task: "new task",
  done: false,
  start: new Date(2020, 1, 1),
  end: new Date(2020, 1, 2),
};

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
// console.log(editTask(4, updatedTask));
// console.log(readQuery(getTaskById(4)));
// console.log(deleteTask(4));
function getAllTasks(database = connection) {}

deleteTask(4);
function getTaskByObject(
  taskObject,
  database = connection
) {}

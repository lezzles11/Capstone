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

function makeFeature(eachFeatureRow) {
  return eachFeatureRow.map((eachRow) => ({
    id: eachRow.id,
    user_id: eachRow.user_id,
    project_id: eachRow.project_id,
    title: eachRow.title,
    done: eachRow.done,
    keyInfo: eachRow.keyInfo,
    tools: eachRow.tools,
    description: eachRow.description,
    notes: eachRow.notes,
    structure: eachRow.structure,
    start: eachRow.start,
    end: eachRow.end,
  }));
}
function getAllFeatures(database = connection) {
  let allFeatures = database("features").select(
    "id",
    "user_id",
    "project_id",
    "title",
    "done",
    "keyInfo",
    "tools",
    "description",
    "notes",
    "structure",
    "start",
    "end"
  );
  return allFeatures.then((eachRow) => {
    console.log(makeFeature(eachRow));
    return makeFeature(eachRow);
  });
}

function addFeature(feature, database = connection) {
  return database("features")
    .insert(feature)
    .then(() => {
      console.log("inserted feature");
    });
}
let postFeatureObject = {
  id: 4,
  user_id: 2,
  project_id: 2,
  title: "new title",
  done: false,
  keyInfo: "key info here",
  tools: "tools",
  description: "description 2",
  notes: "notes2",
  structure: "structure",
  start: new Date(2021, 1, 1),
  end: new Date(2022, 1, 1),
};

function getAllDates(projectId, database = connection) {}

// Get All Project Features
function getAllProjectFeatures(
  projectId,
  database = connection
) {
  return database("features").join("projects", function () {
    this.on("projects.id", "=", "features.project_id").onIn(
      "projects.id",
      projectId
    );
  });
}

// Get All User Features
function getAllUserFeatures(userId, database = connection) {
  return database("features").join("users", function () {
    this.on("users.id", "=", "features.user_id").onIn(
      "users.id",
      userId
    );
  });
}

// Get Feature
function getFeature(feature, database = connection) {
  return database("features")
    .where({ id: feature.id })
    .then((rows) => {
      console.log(rows);
      return rows;
    });
}
console.log(getFeature(3));

// Edit Feature
function editFeature(featureObject, database = connection) {
  return database("features")
    .where({ id: featureObject.id })
    .update(featureObject)
    .then(() => {
      console.log("updated feature");
    });
}

// Delete Feature
function deleteFeature(featureId, database = connection) {
  return database("features")
    .where({ id: featureId })
    .del()
    .then(() => {
      console.log("deleted feature");
    });
}

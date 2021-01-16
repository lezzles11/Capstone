const express = require("express");

const userQueries = require("../queries/users");

const router = express.Router();

module.exports = router;

router.post("/", (request, response) => {
  console.log("Request body: ", request.body);
  console.log("NEED TO FINISH THE POST ROUTE HERE");
  response.send("need to finish post route");
});

router.get("/:id", (request, response) => {
  console.log("Getting user by id, not finished route");
  let id = parseInt(request.params.id);
  console.log(id);
  userQueries
    .getUserById(id)
    .then((user) => {
      response.json(user);
    })
    .catch((error) => {
      response.status(500).send(error.message);
    });
});

router.get("/", (request, response) => {
  userQueries
    .getAllUsers()
    .then((users) => {
      console.log("Getting all users: ", users);
      response.json(users);
    })
    .catch((error) => {
      response.status(500).send(error.message);
    });
});

const express = require("express");

const userQueries = require("../queries/users");

const router = express.Router();

module.exports = router;

router.post("/signup", (request, response) => {
  console.log("Request body: ", request.body);
  let user = {
    name: request.body.name,
    email: request.body.email,
    password: request.body.string,
  };
  console.log("Backend received signup request: ", user);
  response.status(201).send(user);
});

router.post("/login", (request, response) => {
  let user = {
    name: request.body.name,
    email: request.body.email,
    password: request.body.string,
  };
  console.log("Backend received login request: ", user);
  response.status(201).send(user);
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

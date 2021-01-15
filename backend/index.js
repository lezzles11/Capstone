/**********************************************
 * Knex Template
 * ==================================
 * 1. First, install pg and knex
 * 2. After doing so, type in knex init to initialize the file
 * 3. Go to knexfile.js and type in the appropriate credentials
 * 4. To create a migration file: knex migrate:make tableName
 * 5. To run the migration, type in knex migrate:latest
 * 6. To rollback, type in knex:migrate rollback
 ***********************************************/
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const config = require("./config.js");
const app = express();

app.use(bodyParser.json());
app.use(cors());

const knexFile = require("./knexfile.js")["development"];

const knex = require("knex")(knexFile);

const authClass = require("./auth")(knex);

app.use(authClass.initialize());

app.post("/api/login", async function (req, res) {
  console.log("logging in");
  console.log(req.body.email, req.body.password);
  if (req.body.email && req.body.password) {
    let email = req.body.email;
    let password = req.body.password;
    let query = await knex
      .select("*")
      .from("users")
      .where("email", email)
      .andWhere("password", password);

    await query;

    if (query) {
      let userId = {
        id: query[0].id,
      };
      let token = jwt.sign(userId, config.jwtSecret);
      res.json({
        token: token,
      });
    } else {
      console.log("Error occured");
      res.sendStatus(401);
    }
  } else {
    console.log("Error occured");
    res.sendStatus(401);
  }
});

app.get(
  "/api/data",
  authClass.authenticate(),
  function async(request, response) {
    console.log("Authorization");
    console.log(request.headers.authorization);
    let token = request.headers.authorization.split(" ")[1];
    console.log("Token: ", token);
    let decoded = jwt.verify(token, config.jwtSecret);
    console.log("Decoded token: ", decoded);
    response.send("hello");
  }
);

app.listen(8080, () => {
  console.log("Application on port 8080");
});

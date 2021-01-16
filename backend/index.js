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
const userRoutes = require("./routes/users");
const connection = require("./connection");
const readQuery = require("./queries/utilities");
const userQueries = require("./queries/users");
app.use(bodyParser.json());
app.use(cors());
/**********************************************
 * Getting the query
 * ==================================
 * 1. Import the function
 * 2.
 ***********************************************/
const authClass = require("./auth")(connection);

app.use(authClass.initialize());

app.use("/api/users", userRoutes);

app.post("/api/login", async function (req, res) {
  console.log("Backend received email and password: ");
  console.log(req.body.email, req.body.password);
  if (req.body.email && req.body.password) {
    let email = req.body.email;
    let password = req.body.password;

    let query = await connection
      .select("*")
      .from("users")
      .where("email", email);

    await query;

    if (query) {
      let userId = {
        id: query[0].id,
      };
      console.log("Successful query: ", query[0].email);
      let token = jwt.sign(userId, config.jwtSecret);
      console.log("\n**********");
      console.log("What should happen: ");
      console.log(`Received token: ${token}`);
      console.log("\nReceived this data from: ");
      console.log(``);
      console.log("\nThis should go: ");
      console.log("What is happening: ");
      console.log("**********\n");
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
    response.send("hello");
  }
);

app.listen(8080, () => {
  console.log("Application on port 8080");
});

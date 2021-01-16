const jsonWebToken = require("jsonwebtoken");
const expressJWT = require("express-jwt");

const database = require("../queries/users");

module.exports = {
  issue,
  decode,
  createToken,
};
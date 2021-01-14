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

const knex = require("knex")({
  client: "postgresql",
  connection: {
    database: "postgres",
    user: "postgres",
    password: "orange",
  },
});

exports.up = function (knex) {
  return knex.schema.createTable("features", (table) => {
    table.increments("id");
    table.integer("user_id").unsigned();
    table.foreign("user_id").references("users.id");
    table.integer("project_id").unsigned();
    table.foreign("project_id").references("projects.id");
    table.string("title");
    table.boolean("done");
    table.string("keyInfo");
    table.string("tools");
    table.string("description");
    table.string("notes");
    table.string("structure");
    table.timestamp("start");
    table.timestamp("end");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("features");
};

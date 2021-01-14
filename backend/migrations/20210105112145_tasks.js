exports.up = function (knex) {
  return knex.schema.createTable("tasks", (table) => {
    table.increments();
    table.integer("user_id").unsigned();
    table.foreign("user_id").references("users.id");
    table.integer("project_id").unsigned();
    table.foreign("project_id").references("projects.id");
    table.integer("feature_id").unsigned();
    table.foreign("feature_id").references("features.id");
    table.string("task");
    table.boolean("done");
    table.timestamp("start");
    table.timestamp("end");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("tasks");
};

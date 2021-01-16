exports.up = function (knex) {
  return knex.schema.createTable("projects", (table) => {
    table.increments("id");
    table.integer("user_id").unsigned();
    table.foreign("user_id").references("users.id");
    table.string("name");
    table.boolean("done");
    table.string("image_url");
    table.date("deadline");
    table.string("color");
    table.string("purpose");
    table.string("friendOneEmail");
    table.string("friendTwoEmail");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("projects");
};

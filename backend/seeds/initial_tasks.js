exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          user_id: 1,
          project_id: 1,
          feature_id: 1,
          task: "task",
          done: true,
          start: new Date(2021, 1, 1),
          end: new Date(2021, 1, 2),
        },
        {
          id: 2,
          user_id: 1,
          project_id: 1,
          feature_id: 1,
          task: "task",
          done: true,
          start: new Date(2021, 1, 1),
          end: new Date(2021, 1, 2),
        },
        {
          id: 3,
          user_id: 1,
          project_id: 1,
          feature_id: 1,
          task: "task",
          done: true,
          start: new Date(2021, 1, 1),
          end: new Date(2021, 1, 2),
        },
      ]);
    });
};

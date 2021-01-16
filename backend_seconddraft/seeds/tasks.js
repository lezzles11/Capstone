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
        {
          id: 4,
          user_id: 2,
          project_id: 2,
          feature_id: 4,
          task: "task",
          done: true,
          start: new Date(2021, 1, 1),
          end: new Date(2021, 1, 2),
        },
        {
          id: 5,
          user_id: 2,
          project_id: 2,
          feature_id: 4,
          task: "task",
          done: true,
          start: new Date(2021, 1, 1),
          end: new Date(2021, 1, 2),
        },
        {
          id: 6,
          user_id: 2,
          project_id: 2,
          feature_id: 4,
          task: "task",
          done: true,
          start: new Date(2021, 1, 1),
          end: new Date(2021, 1, 2),
        },
        {
          id: 7,
          user_id: 3,
          project_id: 3,
          feature_id: 7,
          task: "task",
          done: true,
          start: new Date(2021, 1, 1),
          end: new Date(2021, 1, 2),
        },
        {
          id: 8, 
          user_id: 3,
          project_id: 3,
          feature_id: 7,
          task: "task",
          done: true,
          start: new Date(2021, 1, 1),
          end: new Date(2021, 1, 2),
        },
        {
          id: 9,
          user_id: 3,
          project_id: 3,
          feature_id: 7,
          task: "task",
          done: true,
          start: new Date(2021, 1, 1),
          end: new Date(2021, 1, 2),
        },
      ]);
    });
};

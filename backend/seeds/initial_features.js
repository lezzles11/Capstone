exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("features")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("features").insert([
        {
          id: 1,
          user_id: 1,
          project_id: 1,
          title: "Knex",
          done: false,
          keyInfo: "key information here",
          tools: "tools",
          description: "description1",
          notes: "notes1",
          structure: "",
          start: new Date(2020, 12, 1),
          end: new Date(2020, 12, 2),
        },
        {
          id: 2,
          user_id: 1,
          project_id: 1,
          title: "Knex",
          done: false,
          keyInfo: "key information here",
          tools: "tools",
          description: "description1",
          notes: "notes1",
          structure: "",
          start: new Date(2020, 12, 1),
          end: new Date(2020, 12, 2),
        },
        {
          id: 3,
          user_id: 1,
          project_id: 1,
          title: "Knex",
          done: false,
          keyInfo: "key information here",
          tools: "tools",
          description: "description1",
          notes: "notes1",
          structure: "",
          start: new Date(2020, 12, 1),
          end: new Date(2020, 12, 2),
        },
      ]);
    });
};

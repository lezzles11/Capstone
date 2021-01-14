exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          name: "Lesley",
          email: "lesley@xccelerate.co",
          password: "password",
        },
        {
          id: 2,
          name: "Ryan",
          email: "ryan@xccelerate.co",
          password: "password",
        },
        {
          id: 3,
          name: "Robert",
          email: "robert@xccelerate.co",
          password: "password",
        },
      ]);
    });
};

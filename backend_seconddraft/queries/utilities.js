function readQuery(query) {
  return query
    .then((rows) => {
      console.log(rows);
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = { readQuery };

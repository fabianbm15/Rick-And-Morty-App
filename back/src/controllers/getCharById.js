const toJSON = require("./../utils/toJSON");

const getCharById = function (res, id) {
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((data) => {
      const char = {
        id: data.id,
        image: data.image,
        name: data.name,
        gender: data.gender,
        species: data.species,
      };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(char));
    })
    .catch((error) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(error.message);
    });
};

module.exports = getCharById;

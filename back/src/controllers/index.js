const axios = require("axios");

const getCharById = function (res, id) {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((data) => data.data)
    .then((data) => {
      const character = {
        image: data.image,
        name: data.name,
        gender: data.gender,
        species: data.species,
        id: data.id,
      };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(character));
    })
    .catch((error) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("not found character");
    });
};

module.exports = {
  getCharById,
};

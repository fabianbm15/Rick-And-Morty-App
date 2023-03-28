const axios = require("axios");
var fav = [];
var char = [];

const getCharacterId = async function (req, res) {
   const { id } = req.params;
   // axios(`https://rickandmortyapi.com/api/character/${id}`)
   //   .then((data) => data.data)
   //   .then((data) => {
   //     const character = {
   //       id: data.id,
   //       image: data.image,
   //       name: data.name,
   //       gender: data.gender,
   //       species: data.species,
   //     };
   //     res.writeHead(200, { "Content-Type": "application/json" });
   //     res.end(JSON.stringify(character));
   //   })
   //   .catch((error) => {
   //     res.writeHead(500, { "Content-Type": "text/plain" });
   //     res.end("not found character");
   //     // res.end(error.message);
   //   });
   try {
      const { data } = await axios(`https://rickandmortyapi.com/api/character/${id}`);
      const character = {
         id: data.id,
         image: data.image,
         name: data.name,
         gender: data.gender,
         species: data.species,
      };
      res.status(200).json(character);
   } catch (error) {
      res.status(500).end({ error: "not found character" });
   }
};

const getDetailId = async function (req, res) {
   const { detailId } = req.params;
   try {
      const { data } = await axios(`https://rickandmortyapi.com/api/character/${detailId}`);
      const character = {
         id: data.id,
         image: data.image,
         name: data.name,
         gender: data.gender,
         status: data.status,
         origin: data.origin,
         species: data.species,
      };
      res.status(200).json(character);
   } catch (error) {
      res.status(500).end({ error: "not found character" });
   }
};

const getFav = function (req, res) {
   res.status(200).end(JSON.stringify(fav));
};
const postFav = function (req, res) {
   fav.push(req.body);
   // console.log("post fav -> ", fav);
   res.status(200).end(JSON.stringify(req.body));
};
const deleteFavId = function (req, res) {
   const { id } = req.params;
   const character = fav.find((c) => c.id === Number(id));
   if (character) {
      fav = fav.filter((e) => e.id !== Number(id));
      res.status(200).end(JSON.stringify(character));
   } else {
      res.status(400).end("Este character no se encuentra en fav");
   }
};

const getChar = function (req, res) {
   res.status(200).end(JSON.stringify(char));
};
const postChar = function (req, res) {
   try {
      char.push(req.body);
      res.status(200).end(JSON.stringify(req.body));
   } catch (error) {
      console.log(error);
   }
};
const deleteCharId = function (req, res) {
   const { id } = req.params;
   const character = char.find((c) => c.id === Number(id));
   if (character) {
      char = char.filter((e) => e.id !== Number(id));
      res.status(200).end(JSON.stringify(character));
   } else {
      res.status(400).end("Este character no se encuentra en char");
   }
};

module.exports = {
   getCharacterId,
   getDetailId,
   getFav,
   postFav,
   deleteFavId,
   getChar,
   postChar,
   deleteCharId,
};

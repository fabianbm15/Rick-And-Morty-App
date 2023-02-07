const express = require("express");
const router = express.Router();
const characters = require("./characters");

router.use("/rickandmorty", characters);

module.exports = router;

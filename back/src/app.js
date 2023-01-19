const http = require("http");
const url = require("url");
const db = require("./data");

// console.log(db);

const PORT = 3001;

http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl);
});

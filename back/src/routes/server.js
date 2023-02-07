// const http = require("http");
// const { getCharById } = require("./../controllers/index");
// const { getCharDetail } = require("./../controllers/index");

// const port = 3001;

// http
//   .createServer((req, res) => {
//     if (req.url.includes("onsearch")) {
//       const id = req.url.split("/")[2];
//       getCharById(res, id);
//     } else if (req.url.includes("detail")) {
//       const id = req.url.split("/")[2];
//       getCharDetail(res, id);
//     }
//   })
//   .listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
//   });

// // const data = require("./../utils/data");
// // PORT = 3001;

// // http
// //   .createServer((req, res) => {
// //     if (!req.url.split("/")[3]) {
// //       if (req.url.includes("rickandmorty/characters")) {
// //         res.writeHead(200, { "Content-Type": "application/json" });
// //         res.end(JSON.stringify(data));
// //       } else {
// //         res.writeHead(404, { "Content-Type": "text/plain" });
// //         res.end("Character not found");
// //       }
// //     } else if (req.url.includes("rickandmorty/character")) {
// //       const idReq = Number(req.url.split("/")[3]);
// //       const character = data.find((e) => e.id === idReq);
// //       if (character) {
// //         res.writeHead(200, { "Content-Type": "application/json" });
// //         res.end(JSON.stringify(character));
// //       } else {
// //         res.writeHead(404, { "Content-Type": "text/plain" });
// //         res.end("Character not found");
// //       }
// //     } else {
// //       res.writeHead(404, { "Content-Type": "text/plain" });
// //       res.end("Character not found");
// //     }
// //   })
// //   .listen(PORT, () => {
// //     console.log("Server running at http://localhost:3001/");
// //   });

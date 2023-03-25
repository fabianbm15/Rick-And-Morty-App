// const app = require("../../app");
// const session = require("supertest");
// const agent = session(app);

// describe("Test de RUTAS", () => {
//   describe("GET rickandmorty/character/{id}", () => {
//     it("Responde con status: 200", () => {
//       agent.get("/rickandmorty/character/1").expect(200);
//     });
//     it("Responde un objeto con las propiedades: id, name, species, gender e image", () => {
//       agent.get("/rickandmorty/character/1").then((res) => {
//         // console.log("-->> ", res);
//         expect(res.body).toEqual({
//           id: 1,
//           name: "Rick Sanchez",
//           species: "Human",
//           gender: "Male",
//           image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
//         });
//       });
//     });
//     it("Si hay un error responde con status: 500", () => {
//       agent.get("/rickandmorty/IDqueNoExiste").expect(500);
//     });
//   });
//   describe("GET rickandmorty/detail/{detailId}", () => {
//     it("Responde con status: 200", () => {
//       agent.get("/rickandmorty/detail/1").expect(200);
//     });
//     it("Responde un objeto con las propiedades: id, name, species, gender, image, status y origin", () => {
//       agent.get("/rickandmorty/detail/1").then((res) => {
//         expect(res.body).toEqual({
//           id: 1,
//           name: "Rick Sanchez",
//           status: "Alive",
//           species: "Human",
//           gender: "Male",
//           origin: {
//             name: "Earth (C-137)",
//             url: "https://rickandmortyapi.com/api/location/1",
//           },
//           image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
//         });
//       });
//     });
//     it("Si hay un error responde con status: 500", () => {
//       agent.get("/rickandmorty/IDqueNoExiste").expect(500);
//     });
//   });
// });

const app = require("../../app");
const session = require("supertest");
const agent = session(app);

describe("Test de RUTAS", () => {
  describe("GET rickandmorty/character/{id}", () => {
    it("Debería responder con un código de estado 200", () => {
      agent.get("/rickandmorty/character/1").expect(200);
    });
    it("Debería responder con un objeto que contenga las propiedades: id, name, species, gender e image", () => {
      agent.get("/rickandmorty/character/1").then((res) => {
        expect(res.body).toHaveProperty("id");
        expect(res.body).toHaveProperty("name");
        expect(res.body).toHaveProperty("species");
        expect(res.body).toHaveProperty("gender");
        expect(res.body).toHaveProperty("image");
      });
    });
    it("Debería responder con un código de estado 500 en caso de error", () => {
      agent.get("/rickandmorty/IDqueNoExiste").expect(500);
    });
  });
  describe("GET rickandmorty/detail/{detailId}", () => {
    it("Debería responder con un código de estado 200", () => {
      agent.get("/rickandmorty/detail/1").expect(200);
    });
    it("Debería responder con un objeto que contenga las propiedades: id, name, species, gender, image, status y origin", () => {
      agent.get("/rickandmorty/detail/1").then((res) => {
        expect(res.body).toHaveProperty("id");
        expect(res.body).toHaveProperty("name");
        expect(res.body).toHaveProperty("status");
        expect(res.body).toHaveProperty("species");
        expect(res.body).toHaveProperty("gender");
        expect(res.body).toHaveProperty("origin");
        expect(res.body).toHaveProperty("image");
      });
    });
    it("Debería responder con un código de estado 500 en caso de error", () => {
      agent.get("/rickandmorty/IDqueNoExiste").expect(500);
    });
  });
});

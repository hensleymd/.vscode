// const express = require ("express");
// const app = express();
// const PORT = 8000;
// const {pokemon1, pokemon2, pokemon3} = require("./data/pokemon");

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// let pokemonList = [pokemon1, pokemon2, pokemon3];

// app.get("/", (request, response) => {
//     response.json({message: "Hello World" });
// });

// app.get("/pokemon", (request, response) => {
//     response.json({ pokemonList });
// });

// app.post("/pokemon", (request, response) => {
//     console.log(request.body);
//     pokemonList.push(request.body);
//     response.json({message: "Successfly created new pokemon"})
// })

// app.listen(PORT, () => console.log(`Listening on port ${PORT}`));


const express = require ("express");
const app = express();
const PORT = 8000;
const { pokemon1, pokemon2, pokemon3 } = require("./data/pokemon");

app.use(express.json());
app.use(express.urlencoded({extented: true}));

require("./routes/pokemon.routes")(app)

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
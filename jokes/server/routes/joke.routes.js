const JokeController = require("../controllers/joke.controller");
const Joke = require("../models/joke.model");

module.exports = (app) => {
    app.get("/api/jokes", JokeController.findAll);
    app.get("/api/jokes/:id", JokeController.findOne);
    app.post("/api/jokes/", JokeController.create);
    app.put("/api/jokes/:id", JokeController.update);
    app.delete("/api/jokes/:id", JokeController.destroy)
};
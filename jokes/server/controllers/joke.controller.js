const Joke = require("../models/joke.model");

module.exports = {
    findAll: (req, res) => {
        Joke.find()
            .then(allJokes => res.json(allJokes))
            .catch(err => res.json({message: "Something went wrong with Joke.findall()", error: err}));
    },
    findOne: (req, res) => {
        Joke.findById(req.params.id)
            .then(oneJoke => res.json(oneJoke))
            .catch(err => res.json({message: "Something went wrong with Joke.findOne", error: err}));
    },
    create: (req, res) => {
        const {body} = req
        Joke.create(body)
            .then((newJoke) => res.json({message: "Successfully created joke", joke: newJoke}))
            .catch(err => res.json({message: "Something went wrong with Joke.create", error: err}))
    },
    update: (req, res) => {
        Joke.findByIdAndUpdate(req.params.id, req.body)
            .then(updatedJoke => res.json({message: "Successfully updated joke", updatedJoke: updatedJoke}))
            .catch(err => res.json({message: "Something went wrong with Joke.update", error: err}))
    },
    destroy: (req, res) => {
        Joke.findByIdAndDelete(req.params.id)
            .then(deleteJoke => res.json({message: deleteJoke}))
            .catch(err => res.json({message: "Something went wrong with Joke.delete", error: err}))
    }
};
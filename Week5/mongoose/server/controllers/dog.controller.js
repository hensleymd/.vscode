const Dog = require("../models/dog.model");

// module.exports.findAll = (req, res)

module.exports = {
    findAll: (req, res) => {
        Dog.find()
            .then(allDogs => res.json(allDogs))
            .catch(err => res.json({message: "Something went wrong with Dog.findAll()", error: err}));
    },
    findOne: (req, res) => {
        Dog.findById(req.params.id)
            .then(oneDog => res.json(oneDog))
            .catch(err => res.json({message: "Something went wron with Dog.findById", error: err}));
    },
    create: (req, res) => {
        const {body} = req
        Dog.create(body)
            .then((newDog) => res.json({message: "Successfully created new dog", dog: newDog}))
            .catch(err => res.json({message: "Something went wrong with Dog.create", error: err}))
    },
    update: (req, res) => {
        Dog.findByIdAndUpdate(req.params.id, req.body)
            .then(updatedDog => res.json({message: "Successfully updated dog", updatedDog: updatedDog}))
            .catch(err => res.json ({message: "Something went wrong with Dog.update", error: err}))
    },
    destroy: (req, res) => {
        Dog.findByIdAndDelete(req.params.id)
            .then(deleteMessage => res.json({message: deleteMessage}))
            .catch(err => res.json ({message: "Something went wrong with Dog.destroy", error: err}))
    }
};

const mongoose = require("mongoose");

const DogSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minLength: [3, "Name must be at least 3 characters long"]
        },
        age: {
            type: Number,
            min: [0, "Dog must be at least 1 year old"]
        },
        gender: {
            type: String,
            enum: {
                values:["Male", "Female", "Other"],
                message: "Unaccepted value"
            }
        },
        breed: {
            type: String,
        },
        furColor: {
            type: String,
        },
        isFixed: {
            type: Boolean,
            required: true
        },
        cuteness: {
            type: Number,
            min: [1, "Cuteness scale must be at least 1"],
            max: [10, "Cuteness scale cannot exceed 10"]
        }

    }, 
    {timestamps: true}
);

const Dog = mongoose.model("Dog", DogSchema);
module.exports = Dog;
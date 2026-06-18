const mongoose = require("mongoose");

const cocktail = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    ingredients: {
        type: String,
        required: true
    },

    instructions: {
        type: String,
        required: true
    },

    image: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Cocktail", cocktail);
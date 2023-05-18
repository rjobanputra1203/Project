
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    userEmail: {
        type: String
    },
    userRecipes: {
        type: [
            {
                name: String,
                imagePath: String,
                description: String,
                ingredients: [{
                    name: String,
                    amount: String
                }],
                created_by: String
            }
        ]
    }
    // name: {
    //     type: String,
    //     required: true
    // },
    // imagePath: {
    //     type: String,
    //     required: true
    // },
    // description: {
    //     type: String,
    //     required: true
    // },
    // ingredients: [{
    //     name: String,
    //     amount: String
    // }]
}, {
    timestamps: true
})
const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;

// 
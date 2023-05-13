// const mongoose = require('mongoose');

// const recipeSchema = new mongoose.Schema({
//     Name:{
//         type: String,
//         trim: true,
//         required: true
//     },
//     imageUrl :{
//         type: String,
//         trim: true,
//         required: true
//     },
//     discription: {
//         type: String,
//         trim: true,
//         required: true
//     },
//     ingredient : 
//     {

//     }
// }, {
//     timestamps: true
// })

// const rcipes = mongoose.model('recipes', recipeSchema)
// module.exports = mongoose.model("recipes")





const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    imagePath: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    ingredients: [{
        name: String,
        amount: String
    }]
}, {
    timestamps: true
})

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;

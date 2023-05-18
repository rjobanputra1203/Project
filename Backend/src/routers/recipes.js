const express = require('express')
const Recipe = require("../models/recipes")
const bodyParser = require('body-parser');      

const router = new express.Router()


//This is for adding a new recipe 

router.post('/recipes', async (req, res) => {

    // await Recipe.deleteMany()

    try {
        console.log("in try")
        const recipes = req.body
        console.log("Recived REQUEST BODY ++++++++++++\n", recipes)
        if (recipes.length !== 0) {
            const user = await Recipe.find({ userEmail: recipes[0].created_by })
            console.log(user)
            if (user.length !== 0) {
                await Recipe.updateOne({ userEmail: recipes[0].created_by }, { $set: { userRecipes: recipes } })
            }
            else {
                await Recipe.create({ userEmail: recipes[0].created_by, userRecipes: recipes })
            }
        }
        let temp = {}
        let response = []
        res.status(201).send(response)

    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})


//This is for fetching data 

router.get('/recipes', async (req, res) => {
    try {
        const {email} = req.query;
        console.log(email)
        let recipes
        if (email === "admin@argusoft.com") {
            recipes = await Recipe.find();
            console.log(recipes)
        } else {
            recipes = await Recipe.find({ userEmail: email });
        }

        // const recipes = await Recipe.find({userEmail: email})
        res.status(200).send(recipes)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})


//this is for updating a recipe 

router.put('/recipes/:id', async (req, res) => {
    const recipeId = req.params.id
    const updates = req.body
    try {
        const recipe = await Recipe.findByIdAndUpdate(recipeId, updates, { new: true })
        res.status(200).send(recipe)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})




module.exports = router
const express = require('express')
const Recipe = require("../models/recipes")

const router = new express.Router()


//This is for adding a new recipe 

router.post('/recipes', async (req, res) => {
  
    await Recipe.deleteMany();
    console.log(req.body)
    const recipe = new Recipe(req.body)
    console.log(recipe)
    try {
        console.log("in try")
        
        await recipe.save()
        res.status(201).send(recipe)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})


//This is for fetching data 

router.get('/recipes', async (req, res) => {
    try {
        const recipes = await Recipe.find()
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
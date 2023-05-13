const express = require('express')
const Recipe = require("../models/recipes")
// const auth = require("../middleware/auth")
const router = new express.Router()

router.post('/recipes', async (req, res) => {
  
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


// router.route('/recipes')
//     // POST request to create a new recipe
//     .post(async (req, res) => {
//         try {
//             const recipe = new Recipe(req.body)
//             await recipe.save()
//             res.status(201).send(recipe)
//         } catch (error) {
//             console.error(error)
//             res.status(400).send(error)
//         }
//     })
//     // PUT request to update an existing recipe
//     .put(async (req, res) => {
//         try {
//             const recipe = await Recipe.findByIdAndUpdate(req.body._id, req.body, { new: true })
//             if (!recipe) {
//                 return res.status(404).send()
//             }
//             res.send(recipe)
//         } catch (error) {
//             console.error(error)
//             res.status(400).send(error)
//         }
//     })



// router.get('/recipes',  async (req, res) => {
//     try {
//         const match = {}
//         const sort = {}
//         if (req.query.completed) {
//             match.completed = req.query.completed === 'true'
//         }

//         if (req.query, sortBy) {
//             const parts = req.query.sortBy.split(':')
//             sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
//         }
      

//         await req.user.populate({
//             path: 'recipes',
//             match,
//             options: {
//                 limit: parseInt(req.query.limit),
//                 skip: parseInt(req.query.skip)
//             }
//         })
//         console.log(req.query.limit)
//         res.send(req.user.tasks)
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })



// router.get('/recipes/:id', auth, async (req, res) => {
//     const _id = req.params.id
//     try {
//         const task = await Task.findOne({ _id, owner: req.user._id })
//         if (!task) {
//             return res.status(404).send()
//         }
//         res.send(task)
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })



// router.patch('/recipes/:id', auth, async (req, res) => {
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['name', 'imageUrl', 'discription', 'ingredient']
//     const isValidUpdate = updates.every((u) => allowedUpdates.includes(u))
//     if (!isValidUpdate) {
//         return res.status(400).send("Invalid Update")
//     }
//     try {
//         const rcipes = await Recipe.findOne({ _id: req.params.id, owner: req.user._id })
//         if (!recipes) {
//             return res.status(404).send()
//         }

//         updates.forEach((update) => recipes[update] = req.body[update])
//         await recipes.save()
//         res.send(recipes)
//     } catch (error) {
//         res.status(400).send()
//     }
// })




// router.delete('/recipes/:id', auth, async (req, res) => {
//     try {
//         const recipe = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user._id })
//         if (!recipe) {
//             return res.status(404).send()
//         }
//         res.send(recipe)
//     } catch (error) {
//         res.status(500).send()
//     }
// })

module.exports = router
// const express = require('express')
// const User = require("../models/user")



// router.post('/auth', async (req, res) => {
//     const user = new User({
//         ...req.body,
//         owner: req.user._id
//     })
//     try {
//         await user.save()
//         res.status(201).send(t1)
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })

const express = require('express')
const router = express.Router()
const User = require('../models/user')
const { Console } = require('console')


router.post('/auth', async (req, res) => {
   
    const user = new User({
        email: req.body.email,
        password: req.body.password
        // owner: req.user._id
    })
    
    try {
        await user.save()
        res.status(201).send(user)
    } catch (error) {
        console.log(typeof(error))
        console.log(error)
        res.status(400).send(error)
    }
})


router.get('/users', async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send(error)
    }
})





module.exports = router

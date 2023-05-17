
// const express = require('express')
// const router = express.Router()
// const User = require('../models/user')



// router.post('/auth', async (req, res) => {

//     const user = new User({
//         email: req.body.email,
//         password: req.body.password
//         // owner: req.user._id
//     })

//     try {
//         await user.save()
//         res.status(201).send(user)
//     } catch (error) {
//         console.log(typeof(error))
//         console.log(error)
//         res.status(400).send(error)
//     }
// })


// router.get('/users', async (req, res) => {
//     try {
//         const users = await User.find()
//         res.status(200).send(users)
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })



// // Replace this with your own user model or data store
// const users = [
//     { email: 'user1@example.com', password: 'password1' },
//     { email: 'user2@example.com', password: 'password2' },
// ];

// router.post('/login', (req, res) => {
//     const { email, password } = req.body;

//     // Find the user in the array by email
//     const user = users.find(u => u.email === email);

//     // If the user doesn't exist or the password is incorrect, return an error
//     if (!user || user.password !== password) {
//         return res.status(401).json({ message: 'Invalid email or password' });
//     }

//     // Return the user object as JSON
//     res.json(user);
// });

// module.exports = router;








// module.exports = router




const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Create a new user
router.post('/auth', async (req, res) => {
    try {
        const user = new User({
            email: req.body.email,
            password: req.body.password
        });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Error creating user' });
    }
});

// Get all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error getting users' });
    }
});

// Login user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        res.status(200).json({
            email: user.email
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error logging in user' });
    }
});

module.exports = router;

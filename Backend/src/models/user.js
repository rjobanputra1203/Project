
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: 'Please enter a valid email address'
        }

    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return v.length >= 6;
            },
            message: 'PASSWORD_MUST_BE_ATLEAST_6_CHARACTERS_LONG'
        }

    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)
module.exports = User

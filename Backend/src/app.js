const express = require('express')
const bodyParser = require('body-parser');      
require("./db/connection.js")
// require()
const cors = require ("cors")


const app = express()
const port = 3000
app.use(cors())
// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     // res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     // res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });

const recipe = require('./routers/recipes')


app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(recipe)



module.exports = app
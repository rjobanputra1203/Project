const app = require('./app')
const router = require ("./routers/recipes.js")
const port = 3000

app.use("/",router)


app.listen(port, () => {
    console.log('Server is up on port ', port)
})
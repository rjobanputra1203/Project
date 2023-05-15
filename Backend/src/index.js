const app = require('./app')
const router = require ("./routers/recipes.js")
const userRouter = require("./routers/user")
const port = 3000

app.use("/",router)
app.use("/",userRouter)


app.listen(port, () => {
    console.log('Server is up on port ', port)
})
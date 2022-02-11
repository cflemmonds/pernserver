require('dotenv').config()
const Express = require('express')
const app = Express()
const dbConnection = require("./db")
app.use(require('./middleware/headers'));

app.use(Express.json())

const controllers = require("./controllers");

app.use("/property", controllers.propertyController)
<<<<<<< HEAD
app.use("/user", controllers.userController)
=======
>>>>>>> brad

dbConnection.authenticate()
    .then(() => dbConnection.sync())
    .then(() => {
        app.listen(4000, () => {
            console.log(`[Server]: App is listening on 4000.`)
        })
    })
    .catch((err) => {
        console.log(`[Server]: Server crashed. Error = ${err} `)
    })
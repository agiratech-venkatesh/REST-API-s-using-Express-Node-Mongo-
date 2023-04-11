const express = require("express")
const colors = require("colors")
const dotenv = require("dotenv").config()
// const swaggerJsDoc = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");
const { errorHandler } = require("./middleware/errorMiddleware")
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

  
app.use("/api/goals", require('./routes/goalRoutes'))
app.use("/api/users", require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started in port ${port}`))
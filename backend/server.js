require('dotenv').config()

const express = require("express")
const workoutRoutes = require('./routes/workouts.js')
const userRoutes = require('./routes/user.js')
const mongoose = require('mongoose')
const { error } = require('console')
const cors = require('cors');

// express app
const app = express()

// Use CORS middleware
app.use(cors());

// middleware
app.use(express.json())
app.use((req, res , next) => {
    console.log(res.path, req.method)
    next()
})

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        //listen for request
        app.listen(process.env.PORT, () => {
            console.log("connected to mongo listening on port", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

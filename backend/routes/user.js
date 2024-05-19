const express = require('express')

const router = express.Router()


// controller
const {loginUser, signupUser} = require('../controllers/userController')

// login route
router.post('/login', loginUser)

// Signup route
router.post('/signup', signupUser)

module.exports = router
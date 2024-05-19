const express = require('express')
const {
    createWorkout,
    getWorkout, getWorkouts, deleteWorkout, updateWorkout
} = require('../controllers/workoutController.js')

const requireAuth = require('../middleware/requireAuth.js')

// require auth for all workout route
const router = express.Router()

router.use(requireAuth)

//Get all  workouts
router.get('/', getWorkouts)

//Get a single workout
router.get('/:id', getWorkout)

//Post a new workout 
router.post('/', createWorkout)

//DELETE a workout
router.delete('/:id', deleteWorkout)

//PATCH a workout
router.patch('/:id', updateWorkout)

module.exports = router
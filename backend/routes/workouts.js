const express = require('express')
const router = express.Router()
const {createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout}= require('../controllers/workoutControllers')

//GET all workouts
router.get('/', getWorkouts)

//GET a single workout
router.get('/:id',getWorkout)

//POST a new workout
router.post('/',createWorkout)

//DELETE a workout
router.delete('/:id',deleteWorkout)

//UPDATE a workout
router.put('/:id', updateWorkout)


module.exports = router
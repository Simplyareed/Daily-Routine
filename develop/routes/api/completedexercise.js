const express = require('express');
const Exercise = require('../models/Exercise');

// Import the necessary modules
const router = express.Router();

// Route to track completed exercises
router.post('/completedexercise', async (req, res) => {
    try {
        // Get the user ID and exercise ID from the request body
        const { userId, exerciseId } = req.body;

        // Find the exercise in the database
        const exercise = await Exercise.findById(exerciseId);

        // If the exercise is found, update the user's completed exercises
        if (exercise) {
            // Check if the user already completed the exercise
            const isCompleted = exercise.completedBy.includes(userId);

            if (!isCompleted) {
                // Add the user ID to the completedBy array
                exercise.completedBy.push(userId);

                // Save the updated exercise
                await exercise.save();

                res.status(200).json({ message: 'Exercise completed successfully' });
            } else {
                res.status(400).json({ message: 'Exercise already completed by the user' });
            }
        } else {
            res.status(404).json({ message: 'Exercise not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
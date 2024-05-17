const axios = require('axios');

const express = require('express');

const router = express.Router();

require('dotenv').config();

router.post('/searchexerciseforbodypart', async(req, res) => {
    console.log(req.body);
    console.log(req.query);
    const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/'.concat(req.query.bodyPart.toLocaleLowerCase()),
        params: {limit: '2'},
        headers: {
            'X-RapidAPI-Key': process.env.EXERCISE_KEY,
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response);
        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
    }
})

module.exports = router;

// API keys and URLs
// const exerciseApiKey = 'db90687ecfmshf2ae528d89c708bp1607d4jsndaf6fe1c5257';
// const nutritionApiKey = 'RCctb1uzIlIsdqMygA0cvkrIidpuxY395uGjks6m';\
const exerciseURL = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/';
// const axios = require('axios');

//DOM elements
const bodyPartBtn = document.querySelector('.body-part');
const backBtn = document.querySelector('.back-btn');

let part;

async function findExercise(bodyPart) {
    const options = {
        method: 'POST',
        url: '/api/searchexerciseforbodypart',
        params: {
            limit: '0',
            // offset: '0',
            bodyPart
        }
    };

    try {
        const response = await axios.request(options);

        let results = response.data;
        let selection = results[0];
        console.log(selection);

        document.querySelector('.exercise-name').innerHTML = selection.name;
        document.querySelector('.exercise-target').innerHTML = selection.target;
        document.querySelector('.exercise-equipment').innerHTML = selection.equipment;
        document.querySelector('.exercise-description').innerHTML = selection.instructions;
        document.querySelector('.exercise-gif').src = selection.gifUrl;

        document.querySelector('.body-part').style.display = 'none';
        document.querySelector('.one-exercise').style.display = 'block';

    } catch (error) {
        console.error(error);
    }
}

bodyPartBtn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target.textContent);
    part = event.target.textContent;
    findExercise(event.target.textContent);
})

backBtn.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('.one-exercise').style.display = 'none';
    document.querySelector('.body-part').style.display = 'flex';
})

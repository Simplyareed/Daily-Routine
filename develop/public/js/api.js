// API keys and URLs
// const exerciseApiKey = 'db90687ecfmshf2ae528d89c708bp1607d4jsndaf6fe1c5257';
// const nutritionApiKey = 'RCctb1uzIlIsdqMygA0cvkrIidpuxY395uGjks6m';\
const exerciseURL = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/';

//DOM elements
const exerciseSearchBox = document.querySelector('.exercise-serch input');
const nutritionSearchBox = document.querySelector('.nutrition-search input');
const bodyPartBtn = document.querySelector('.body-part');
const nutritionSearchBtn = document.querySelector('.nutrition-search button');

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
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

bodyPartBtn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target.textContent.toLowerCase());
    findExercise(event.target.textContent);
})

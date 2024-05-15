// API keys and URLs
// const exerciseApiKey = 'db90687ecfmshf2ae528d89c708bp1607d4jsndaf6fe1c5257';
// const nutritionApiKey = 'RCctb1uzIlIsdqMygA0cvkrIidpuxY395uGjks6m';\
const exerciseURL = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/';

//DOM elements
const exerciseSearchBox = document.querySelector('.exercise-serch input');
const nutritionSearchBox = document.querySelector('.nutrition-search input');
const bodyPartBtn = document.querySelector('.body-part');
const nutritionSearchBtn = document.querySelector('.nutrition-search button');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'db90687ecfmshf2ae528d89c708bp1607d4jsndaf6fe1c5257',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

async function findExercise(bodyPart) {
    const response = await fetch(exerciseURL + bodyPart, options);

    if (response.status == 404) {
        document.querySelector('.exercise-error').style.display = 'block';
    } else {
        let data = await response.json();
        let results = data.results;

        console.log(results);
    }
}

bodyPartBtn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target.textContent.toLowerCase());
    findExercise(event.target.textContent.toLowerCase());
})

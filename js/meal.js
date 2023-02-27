const listMeal = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    // console.log(meals);
    const mealContainer = document.getElementById('meal-container')
    mealContainer.innerText = '';
    meals.forEach(meal => {
        // console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button onclick="displayMeal(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Details
                </button>
            </div>
      </div>
        `;
        mealContainer.appendChild(mealDiv);
    });

}

const fishSearch = () => {
    const searchField = document.getElementById('search-text').value;
    listMeal(searchField);
}

const displayMeal = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = mealDetails => {
    document.getElementById('exampleModalLabel').innerText = mealDetails.strMeal;
    const mealBody = document.getElementById('meal-details-body');
    mealBody.innerHTML = `
        <img class ="img-fluid" src = "${mealDetails.strMealThumb}">
    `
}

listMeal('rice');
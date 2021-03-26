const searchBtn = document.getElementById('searchBtn');
const submit = document.getElementById('submit');
const resultHeading = document.getElementsByClassName('result-heading');
const meal = document.getElementById('meals');
const singleMeal = document.getElementById('single-meal');

//search meal
function searchMeal(e) {
    e.preventDefault();
    //clear single meal
    singleMeal.innerHTML = "";


    // get search meal
    const term = search.value;

    // check for empty
    if (term.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                resultHeading.innerHTML=`<h2> Search Result for ${term}`;
                if(data.meals==null){
                    resultHeading.innerHTML=`<h2> There are no result for ${term}`;
                }
                else{
                    meal.innerHTML = data.meals.map (
                        meal => `
                        <div class="meal">
                        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                        <div class="meal-info" dataMealId="${meal.idMeal}">
                        <h5> ${meal.strMeal} </h5>
                       
                        </div>
                        
                        </div>
                        `
                    )
                    .join("");
                }
            });

    }


}
submit.addEventListener('click', searchMeal);
searchBtn.addEventListener('click', searchMeal);
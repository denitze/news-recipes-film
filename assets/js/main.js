const foodResult = document.getElementById("food-result")
let ingredient = document.getElementById("ingredient")

// fetch('https://api.spoonacular.com/recipes/findByIngredients?apiKey=dc19a07e2b204a24857d8eff71c69d5b&ingredients=apples')
//   .then(response => response.json())
//   .then(json => {

    
//     })

    function findRecipe() {
        ingredient = ingredient.value;
        fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=dc19a07e2b204a24857d8eff71c69d5b&number=3&ingredients=${ingredient}`)
        .then(response => response.json())
        .then(json => {
        if(json.length < 1) {
            console.log("ERROR");
        } else {

        for (let i=0; i<json.length; i++) {
            console.log(json)
            let recipeId = json[i].id;

            fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=dc19a07e2b204a24857d8eff71c69d5b`)
            .then(response => response.json())
            .then(json => { 
                foodResult.innerHTML +=
                `<div class="recipe">
            <img src="${json.image}" alt="">
            <h2>${json.title}</h2>
            <p> Ready in ${json.readyInMinutes} Minutes</p>
            <button><a href="${json.sourceUrl}">See Recipe</a></button>
        </div>`
                console.log(json);
                console.log(json.title)
                console.log(json.image)
                console.log(json.readyInMinutes);
                console.log(json.summary);
                console.log(json.sourceUrl);
                console.log("------");
            })
           
        }   
        ingredient = " "
        }
    })
    }
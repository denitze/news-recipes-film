<<<<<<< HEAD
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
=======
// Finns JS
const newsGrid = document.getElementById("newsGrid")

fetch('http://api.openweathermap.org/data/2.5/weather?q=düsseldorf&appid=cde5dbad7e9a5b07151e5dd79edf0e3c')
  .then(response => response.json())
  .then(json => console.log(json))




fetch('http://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=016fe436cfa242efa8d017d6af24688e')
  .then(response => response.json())
  .then(json => {
        // console.log(json);
        
        json.articles.forEach(element => {
            // console.log(element);
            if (element.urlToImage != undefined) {
            newsGrid.innerHTML += `
            <figure>
                <img src=${element.urlToImage} alt="">
                <figcaption>${element.title}</figcaption>
                <p class="description">${element.description} <a href=${element.url}>Weiter lesen</a></p>
                
            </figure>
            `
        }

        })
  } )
>>>>>>> e401968ab8f3e12b255839981b3aa8fb41e47ac0

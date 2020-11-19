// Denise JS

const foodResult = document.getElementById("food-result")
const ingredient = document.getElementById("ingredient")

// fetch('https://api.spoonacular.com/recipes/findByIngredients?apiKey=dc19a07e2b204a24857d8eff71c69d5b&ingredients=apples')
//   .then(response => response.json())
//   .then(json => {

    
//     })

    function findRecipe() {
        console.log(ingredient);
        let search = ingredient.value;
        foodResult.innerHTML = ""
        // ingredient = ingredient.value;
        console.log(ingredient);
        // fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=dc19a07e2b204a24857d8eff71c69d5b&number=10&ingredients=${search}`)
        fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=df611f75b97141be917063ad735d8e66&number=10&ingredients=${search}`)
        .then(response => response.json())
        .then(json => {
        if(search = json.length < 1) {
            console.log("ERROR");
            foodResult.innerHTML += `<p></p><p id="foodInnerHTML">Hierzu gibt es kein Rezept!</p>`
        } else {

        for (let i=0; i<json.length; i++) {
            console.log(json)
            let recipeId = json[i].id;

            // fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=dc19a07e2b204a24857d8eff71c69d5b`)
            fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=df611f75b97141be917063ad735d8e66`)
            .then(response => response.json())
            .then(json => { 
                foodResult.innerHTML +=
                `<div class="recipe">
            <img src="${json.image}" alt="">
            <h2>${json.title}</h2>
            <img src="assets/img/cooking-time.png" alt="" class="icon">
            <p> Ready in ${json.readyInMinutes} Minutes</p>
            <button><a href="${json.sourceUrl}">See Recipe</a></button>
        </div>`
            })
           
        }   
        }
        
    })
    ingredient.value = ""
    }

// Finns JS
const newsGrid = document.getElementById("newsGrid")
let weatherOutput = document.getElementById("weather")

// const weatherSearch = document.getElementById("weatherSearch")
function test2() {
fetch('http://api.openweathermap.org/data/2.5/weather?q=düsseldorf&units=metric&appid=cde5dbad7e9a5b07151e5dd79edf0e3c')
  .then(response => response.json())
  .then(weather => {
      console.log(weather);
      weatherOutput = document.getElementById("weather")
      weatherOutput.innerHTML += `
        <img src="assets/img/nicolas-peyrol-l2VmsBG8nPE-unsplash.jpg" alt="">
        <figcaption>Das Wetter für ${weather.name}</figcaption>
        <h2>Es sind aktuell ${weather.main.temp} C°</h2>
        <h3>Fühlt sich aber eher an wie ${weather.main.feels_like} C°.</h3>
        <p>Die Luftfeuchtigkeit beträgt ${weather.main.humidity}%.</p>
        <p>Die Windgeschwindigkeit beträgt ${weather.wind.speed}km/h.</p>
        <form action="">
            <input type="text" id="weatherInput" placeholder="Köln">
            <input type="button" id="weatherSearch" value="Click" onclick="test()">
        </form>
    `
  })
}
test2()

function test() {
    const weatherInput = document.getElementById("weatherInput")
    const weatherInput2 = weatherInput.value
    const weatherOutput = document.getElementById("weather")
    console.log("hallo");
    console.log(weatherInput2);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${weatherInput2}&units=metric&appid=cde5dbad7e9a5b07151e5dd79edf0e3c`)
  .then(response => response.json())
  .then(weather => {
      console.log(weather);
      weatherOutput.innerHTML = `
        <img src="assets/img/noaa-Y7GUOQ83OMg-unsplash.jpg" alt="">
        <figcaption>Das Wetter für ${weather.name}</figcaption>
        <h2>Es sind aktuell ${weather.main.temp} C°</h2>
        <h3>Fühlt sich aber eher an wie ${weather.main.feels_like} C°.</h3>
        <p>Die Luftfeuchtigkeit beträgt ${weather.main.humidity}%.</p>
        <p>Die Windgeschwindigkeit beträgt ${weather.wind.speed}km/h.</p>
        <form action="">
            <input type="text" id="weatherInput" placeholder="Köln">
            <input type="button" id="weatherSearch" value="Click" onclick="test()">
        </form>
    `
  })
}


const newsSelect = document.getElementById("categories")
fetch('http://newsapi.org/v2/top-headlines?country=de&category=general&apiKey=016fe436cfa242efa8d017d6af24688e')
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


  newsSelect.addEventListener("change", () => {
        fetch(`http://newsapi.org/v2/top-headlines?country=de&category=${newsSelect.value}&apiKey=016fe436cfa242efa8d017d6af24688e`)
        .then(response => response.json())
        .then(json => {
              // console.log(json);
              newsGrid.innerHTML = `<figure id="weather"></figure>`
              test2()
              console.log(newsSelect.value);
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
        
  })
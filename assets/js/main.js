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

const API_KEY ="6ce8acc06de899aab9f7d98a22bb82c4"

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city){
    try {
        const response = await fetch(apiUrl + city+ `&appid=${API_KEY}`);
        // Await the .json() method
        let data = await response.json();
        console.log(data);

        if(response.status==404){
            document.querySelector(".error").style.display='block'
            document.querySelector(".weather").style.display='none'

        }


        // Check if the API response is valid and contains the necessary data
        else if (response.ok) {
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML =Math.round( data.main.temp )+"°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
            document.querySelector(".wind").innerHTML = data.wind.speed+"km/h";

            if(data.weather[0].main=="Cloud"){
                weatherIcon.src="images/clouds.png"
            }else if(data.weather[0].main=="Clear"){
                weatherIcon.src="images/clear.png"
            }else if(data.weather[0].main=="Rain"){
                weatherIcon.src="images/rain.png"
            }else if(data.weather[0].main=="Drizzle"){
                weatherIcon.src="images/drizzle.png"
            }else if(data.weather[0].main=="Mist"){
                weatherIcon.src="images/mist.png"
            }

            document.querySelector(".weather").style.display="block"
            document.querySelector(".error").style.display='none'

        } else {
            console.log("Error: " + data.message);
        }
        
    } catch (error) {
        console.log("Failed to fetch weather data:", error);
    }
    
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})


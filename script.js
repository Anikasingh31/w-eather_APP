const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const feels_like = document.getElementById("feels_like");
const humidity = document.getElementById("humidity");
const min_temp = document.getElementById("min_temp");
const max_temp = document.getElementById("max_temp");
const wind_speed = document.getElementById("wind_speed");
const wind_degrees = document.getElementById("wind_degrees");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");


const apiUrl = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather';

const apiOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4a4825fb42msh45cee8efbabd704p1f88bajsne8f7a045c856',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


async function getWeather(city) {
    cityName.innerHTML = city;

    try {
        
        const cityUrl = `${apiUrl}?city=${city}`;

        
        const response = await fetch(cityUrl, apiOptions);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

       
        const data = await response.json();

        
        
        temp.innerHTML = data.temp;
        temp2.innerHTML = data.temp;
        feels_like.innerHTML = data.feels_like;
        humidity.innerHTML = data.humidity;
        humidity2.innerHTML = data.humidity;
        min_temp.innerHTML = data.min_temp;
        max_temp.innerHTML = data.max_temp;
        wind_speed.innerHTML = data.wind_speed;
        wind_speed2.innerHTML = data.wind_speed;
        wind_degrees.innerHTML = data.wind_degrees;
        sunrise.innerHTML = data.sunrise;
        sunset.innerHTML = data.sunset;
    } catch (error) {
        console.error(error);
    }
}


const submit = document.getElementById("submit");

submit.addEventListener("click", async (e) => {
    e.preventDefault();
    const cityInput = document.getElementById("city");
    const city = cityInput.value;
    await getWeather(city);
});


getWeather("Chennai");

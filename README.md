# Weather App

## Overview
The **Weather App** is a simple web application that provides real-time weather updates for any city. It displays temperature, humidity, wind data, and sunrise/sunset times using data from the Weather API.

## Features
- Search for any city to get weather information
- Displays:
  - Temperature (current, min, max)
  - Feels-like temperature
  - Humidity
  - Wind speed and wind degrees
  - Sunrise and sunset times
- User-friendly interface with Bootstrap styling
- Uses **RapidAPI's Weather API** for fetching weather data

## Technologies Used
- **HTML, CSS, Bootstrap** for UI design
- **JavaScript (ES6)** for interactivity and API requests
- **Weather API** (via RapidAPI) for real-time data

## Setup Instructions
### Prerequisites
- A web browser (Chrome, Firefox, Edge, etc.)
- An active internet connection
- API Key from [RapidAPI](https://rapidapi.com/)

### Steps to Run
1. Clone this repository or download the files.
2. Open `index.html` in a web browser.
3. Edit the `script.js` file and replace the API key (`X-RapidAPI-Key`) with your own from RapidAPI.
4. Enter a city name in the search bar and click **Search** to get the weather details.

## File Structure
```
/weather-app
│── index.html   # Main UI structure
│── script.js    # Handles API requests and updates the UI
│── styles.css   # Custom styles (if needed)
```

## API Information
This app uses **Weather by API Ninjas** from RapidAPI to fetch real-time weather data.

**Endpoint:**
```
https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city={city_name}
```

**Headers Required:**
```json
{
  "X-RapidAPI-Key": "YOUR_API_KEY_HERE",
  "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com"
}
```


async function getWeatherData() {
    const WeatherData = await fetch("/weather");
    const WeatherDataJSON = await WeatherData.json();
    const WeatherDataArray = [];

    for (let i = 0; i < 5; i++) {
        const WeatherDataObject = {};
        WeatherDataObject.temperatureRange = "max: " + Math.round(WeatherDataJSON.daily[i].temp.min) + ", min: " + Math.round(WeatherDataJSON.daily[i].temp.max) + "°C";
        WeatherDataObject.weatherDescription = WeatherDataJSON.daily[i].summary;
        WeatherDataObject.WindSpeed = Math.round(WeatherDataJSON.daily[i].wind_speed * 3.6);
        WeatherDataObject.Date = WeatherDataJSON.daily[i].dt;
        WeatherDataArray.push(WeatherDataObject);
    }
    return WeatherDataArray;
}


document.addEventListener("DOMContentLoaded", () => {
    async function init() {
        WeatherData = await getWeatherData();
        var weatherDiv = document.createElement("div");
        weatherDiv.classList.add("Weather");
        var weatherTitle = document.createElement("div");
        weatherTitle.classList.add("Weather-Title");
        var weatherTitleH1 = document.createElement("h1");
        weatherTitleH1.innerText = "Weather";
        weatherTitle.appendChild(weatherTitleH1);
        weatherDiv.appendChild(weatherTitle);

        for (let x = 0; x<5; x++) {
            let Day = document.createElement("div");
            Day.classList.add("D1");
            let WeatherText = ""
            
            const dayOfWeek = new Date(WeatherData[x].Date * 1000).getDay();
            const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const dayOfWeekString = daysOfWeek[dayOfWeek];

            WeatherText += dayOfWeekString + "\n";
            WeatherText += WeatherData[x].temperatureRange + ", ";
            WeatherText += "Wind speed: " + WeatherData[x].WindSpeed + "km/h\n";
            WeatherText += WeatherData[x].weatherDescription + "\n";
            Day.innerText = WeatherText;
            Day.style.opacity = 1 - (x*0.2);
            weatherDiv.appendChild(Day);
        }
        
        if (widgets.hasOwnProperty("Weather")) {
            const position = widgets["Weather"].split(",");
            weatherDiv.style.left = position[0]+"%";
            weatherDiv.style.top = position[1]+"%";
        }
        
        document.body.appendChild(weatherDiv);
    }   
    init();
});
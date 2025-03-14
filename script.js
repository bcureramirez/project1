document.getElementById("getweather").addEventListener("click", function() {
    //city name from the input box
    let city = document.getElementById("city").value;
    
    // get api key from the website
    let apiKey = "4bc143ba17b221f2650111c2dd6032bf";  
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    //fetch weather data
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('API request failed with status ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            if (data && data.main) {
                // get the weather details from the API response
                let placeName = data.name;
                let temperature = data.main.temp;
                let description = data.weather[0].description;
                let humidity = data.main.humidity;
                let rain = data.rain ? data.rain["1h"] : "No rain";  // Check if rain data exists

                // show the weather details on the website
                document.getElementById("PlaceName").textContent = `Place: ${placeName}`;
                document.getElementById("Temp").textContent = `Temperature: ${temperature}°C`;
                document.getElementById("description").textContent = `Description: ${description}`;
                document.getElementById("humidity").textContent = `Humidity: ${humidity}%`;
                document.getElementById("rain").textContent = `Rain: ${rain}`;
            } else {
                throw new Error("Weather data not available");
            }
        })
        .catch(error => {
            console.log("Error fetching data:", error);
            alert("Error fetching weather data. Please check the city name and try again.");
        });
});

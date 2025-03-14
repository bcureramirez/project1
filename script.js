document.getElementById("getweather").addEventListener("click", function() {
    // Get the city name from the input field
    let city = document.getElementById("city").value;
    
    // Your updated API key (make sure it is correct and surrounded by quotes)
    let apiKey = "4bc143ba17b221f2650111c2dd6032bf";  // Replace with your key
    
    // URL to fetch weather data (replace 'city' with the input value)
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Fetch weather data
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('API request failed with status ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            if (data && data.main) {
                // Extract relevant weather details from the API response
                let cityName = data.name;
                let temperature = data.main.temp;
                let description = data.weather[0].description;
                let humidity = data.main.humidity;
                let rain = data.rain ? data.rain["1h"] : "No rain";  // Check if rain data exists

                // Display the weather details on the webpage
                document.getElementById("CityName").textContent = `City: ${cityName}`;
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

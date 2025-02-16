function getWeather() {
    const city = document.getElementById('city-input').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeather API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.cod === '404') {
          alert('City not found. Please try again.');
        } else {
          const cityName = data.name;
          const temperature = data.main.temp;
          const humidity = data.main.humidity;
          const windSpeed = data.wind.speed;
          const description = data.weather[0].description;
  
          // Update the UI with fetched data
          document.getElementById('city-name').innerText = cityName;
          document.getElementById('temperature').innerText = `Temperature: ${temperature}°C`;
          document.getElementById('humidity').innerText = `Humidity: ${humidity}%`;
          document.getElementById('wind').innerText = `Wind Speed: ${windSpeed} m/s`;
          document.getElementById('description').innerText = `Description: ${description.charAt(0).toUpperCase() + description.slice(1)}`;
        }
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        alert('There was an error fetching weather data. Please try again later.');
      });
  }
  
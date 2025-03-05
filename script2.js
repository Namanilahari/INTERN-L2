document.getElementById('get-weather').addEventListener('click', function() {
  const city = document.getElementById('city-input').value;
  const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
  const url = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric;

  fetch(url)
      .then(response => {
          if (!response.ok) {
              throw new Error('City not found. Please try again.');
          }
          return response.json();
      })
      .then(data => {
          document.getElementById('city-name').innerText = Weather in ${data.name};
          document.getElementById('temperature').innerText = Temperature: ${data.main.temp} °C;
          document.getElementById('description').innerText = Condition: ${data.weather[0].description};
          document.getElementById('humidity').innerText = Humidity: ${data.main.humidity}%;
          document.getElementById('wind-speed').innerText = Wind Speed: ${data.wind.speed} m/s;
          document.getElementById('weather-display').classList.remove('hidden');
      })
      .catch(error => {
          alert(error.message);
        });
});
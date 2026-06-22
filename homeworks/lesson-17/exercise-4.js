document.getElementById('weather-btn').addEventListener('click', async (e) => {
  e.preventDefault();
  
  const cityInput = document.getElementById('city-input');
  const city = cityInput.value;
  
  try {
    const response = await fetch('http://localhost:3000/weather', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ city })
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    const weatherResult = document.getElementById('weather-result');
    weatherResult.textContent = JSON.stringify(data);
    
  } catch (error) {
    console.error('Error fetching weather:', error);
  }
});

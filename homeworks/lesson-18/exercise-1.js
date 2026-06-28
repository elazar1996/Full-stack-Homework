// Exercise 1 - Callback Hell

// Helper to convert fetch into callback-style
function fetchJSON(url, options, callback) {
  // If options is a function, it means options were not provided
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }

  fetch(url, options)
    .then(res => res.json())
    .then(data => callback(null, data))
    .catch(err => callback(err, null));
}

document.getElementById('btn').addEventListener('click', (e) => {
  fetchJSON('http://localhost:3000/houses', { method: 'GET' }, (err, houses) => {
    if (err) {
      console.error(err);
      return;
    }
    
    for (let i = 0; i < houses.length; i++) {
      const house = houses[i];
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(house.politicians)
      };
      
      fetchJSON('http://localhost:3000/bulk-politicians', options, (err2, politiciansData) => {
        if (err2) {
          console.error(err2);
          return;
        }
        
        console.log(politiciansData);
      });
    }
  });
});

// Exercise 2 - Then / Catch

document.getElementById('btn').addEventListener('click', (e) => {
  fetch('http://localhost:3000/houses')
    .then(res => res.json())
    .then(houses => {
      const requests = houses.map(house => {
        return fetch('http://localhost:3000/bulk-politicians', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(house.politicians)
        });
      });
      return Promise.all(requests);
    })
    .then(responses => {
      const jsonPromises = responses.map(r => r.json());
      return Promise.all(jsonPromises);
    })
    .then(politiciansDataArray => {
      console.log(politiciansDataArray);
    })
    .catch(err => {
      console.error(err);
    });
});

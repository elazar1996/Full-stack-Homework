// Exercise 3 - Promise.allSettled

document.getElementById('btn').addEventListener('click', async (e) => {
  try {
    const res = await fetch('http://localhost:3000/houses');
    const houses = await res.json();
    
    const requests = houses.map(house => 
      fetch('http://localhost:3000/bulk-politicians', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(house.politicians)
      })
    );
    
    const responsesSettled = await Promise.allSettled(requests);
    
    responsesSettled
      .filter(r => r.status === 'rejected')
      .forEach(r => console.warn('Request failed:', r.reason));
    
    const successfulResponses = responsesSettled
      .filter(r => r.status === 'fulfilled')
      .map(r => r.value);
      
    const jsonPromises = successfulResponses.map(r => r.json());
    const dataSettled = await Promise.allSettled(jsonPromises);
    
    dataSettled
      .filter(d => d.status === 'rejected')
      .forEach(d => console.warn('JSON parse failed:', d.reason));
    
    const finalData = dataSettled
      .filter(d => d.status === 'fulfilled')
      .map(d => d.value);
      
    console.log(finalData);
    
  } catch (err) {
    console.error(err);
  }
});

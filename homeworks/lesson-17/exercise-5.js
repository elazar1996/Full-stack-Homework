document.getElementById('order-btn').addEventListener('click', async (e) => {  
  e.preventDefault()  
  const selectedIds = [3, 7, 12]

  const res = await fetch('http://localhost:3000/order', {  
    method: 'POST',
    // FIX 1: Added Content-Type header so the server knows it's receiving JSON
    headers: {
      'Content-Type': 'application/json'
    },
    // FIX 2: Stringified the body object to valid JSON string
    body: JSON.stringify({ ids: selectedIds })  
  })

  const data = await res.json()  
  document.getElementById('confirmation').textContent = JSON.stringify(data)  
})

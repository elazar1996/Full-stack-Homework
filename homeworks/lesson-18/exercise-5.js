// Exercise 5 - Fix the Bug

document.getElementById('load-btn').addEventListener('click', (e) => {
  fetch('http://localhost:3000/products', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => {
      return res.json()  // bug 1 fixed: added return
    })
    .then(products => {
      const requests = products.map(product =>
        fetch(`http://localhost:3000/products/${product.id}`)
      )
      return Promise.all(requests)
    })
    .then(responses => {
      return Promise.all(responses.map(r => r.json()))
    })
    .then(details => {
      console.log('All product details:', details)
    })
    .catch(err => {
      console.error(err.message || err)  // bug 2 fixed: log err if err.message is undefined
    })
})

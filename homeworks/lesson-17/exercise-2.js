import express from 'express'
const app = express()

// FIX: Added express.json() middleware to parse JSON bodies
app.use(express.json())

app.post('/search', (req, res) => {
  const { name } = req.body
  res.json({ found: name })
})

app.listen(3000)

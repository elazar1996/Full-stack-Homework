import express from "express"

const app = express()  
app.use(express.json())  // <-- missing line added

app.post("/feedback", (req, res) => {  
  try {  
    const response = {  
      received: req.body.feedback,  // <-- req.body, not req.params  
      message: "Thanks!"  
    }  
    res.status(200).json(response)  
  } catch (error) {  
    console.log(error.message)  
    res.status(500).send('Internal Server Error')  
  }  
})

app.listen(3000, () => {  
  console.log("Server is listening on port 3000")  
})

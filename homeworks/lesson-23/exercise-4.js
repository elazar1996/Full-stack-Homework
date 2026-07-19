router.get("/:id", async (req, res) => {  
  try {  
    const bookId = req.params.id  
    const stringifyBooks = await fs.readFile(`${__dirname}/../db/books.json`)  
    const books = JSON.parse(stringifyBooks)  
    const book = books.find((book) => book.id == bookId)  
    if (!book) {  
      return res.status(404).send("Book not found")  
    }  
    res.json(book)  
  } catch (error) {  
    console.error({  
      message: "Failed to fetch book from the db",  
      endpoint: "/:id",  
      // Fix: Change 'err.message' to 'error.message'
      errorMsg: error.message,  
    })  
    res.status(500).send("Internal server error")  
  }  
})

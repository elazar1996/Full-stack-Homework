app.patch("/product/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const filePath = `${__dirname}/db/products.json`;
    
    // Read products from file
    const data = await fs.readFile(filePath, "utf8");
    const products = JSON.parse(data);
    
    // Find product index
    const index = products.findIndex(p => String(p.id) === String(productId));
    
    // Return 404 if not found
    if (index === -1) {
      return res.status(404).json({ message: "Product not found" });
    }
    
    // Merge existing product with req.body
    products[index] = { ...products[index], ...req.body };
    
    // Write the updated array back to products.json
    await fs.writeFile(filePath, JSON.stringify(products, null, 2));
    
    // Respond with the updated array
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

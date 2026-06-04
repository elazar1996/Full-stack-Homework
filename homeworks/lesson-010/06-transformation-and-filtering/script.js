const products = [
  { id: 1, price: 20 },
  { id: 2, price: 50 },
  { id: 3, price: 15 },
];

const expensiveProduct = products.filter((product) => product.price >= 20); // מסנן את המוצר השלישי
console.log(expensiveProduct);

const expensiveProductIds = expensiveProduct.map((product) => product.id); // שולף רק את המזהה (id)

// התוצאה של expensiveProductIds תהיה: [1, 2]
console.log(expensiveProductIds);

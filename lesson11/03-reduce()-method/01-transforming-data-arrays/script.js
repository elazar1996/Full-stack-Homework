const inventory = [
  { item: "Laptop", price: 1200, quantity: 5 },
  { item: "Mouse", price: 25, quantity: 50 },
  { item: "Keyboard", price: 100, quantity: 20 },
];

const totalValue = inventory.reduce((total, currentItem) => {
  return total + currentItem.price * currentItem.quantity;
}, 0);

console.log(totalValue); // 9250 (6000 + 1250 + 2000)

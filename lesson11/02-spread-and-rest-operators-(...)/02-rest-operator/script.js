const calculateTotal = (discount, ...prices) => {
  // חישוב סכום המחירים
  let sum = 0;
  for (let price of prices) {
    sum += price;
  }

  // יישום ההנחה (לדוגמה, אם ההנחה היא 20, נכפיל ב-0.80)
  return sum * (1 - discount / 100);
};

console.log(calculateTotal(20, 100, 50, 50)); // 160 (20% הנחה על 200)

function checkDivisibility() {
  let num1 = Math.floor(Math.random() * 50) + 1;
  let num2 = Math.floor(Math.random() * 50) + 1;

  console.log(`Num1: ${num1}, Num2: ${num2}`);

  // בדיקה מקוצרת והדפסה בשורה אחת לכל כיוון
  console.log(`Is Num1 divisible by Num2? ${num1 % num2 === 0 ? "Yes" : "No"}`);
  console.log(`Is Num2 divisible by Num1? ${num2 % num1 === 0 ? "Yes" : "No"}`);
}

checkDivisibility();

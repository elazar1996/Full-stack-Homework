// פונקציה המקבלת מספר ומחזירה את הספרה הימנית ביותר
function getRightmostDigit(n) {
  return n % 10;
}

// הגדרת המספר
let number = Math.floor(Math.random() * 9000) + 1000;

// קריאה לפונקציה ושמירת התוצאה
let rightmostDigit = getRightmostDigit(number);

console.log(number);

// הדפסת התוצאה לקונסול
console.log(rightmostDigit);

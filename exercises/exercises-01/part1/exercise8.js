function showSumOfTwoDigitNumber() {
  // 1. הגרלת מספר דו-ספרתי (בין 10 ל-99)
  // 99 פחות 10 ועוד 1 = 90 אפשרויות
  let number = Math.floor(Math.random() * 90) + 10;

  // 2. חילוץ ספרת העשרות (חלוקה ב-10)
  let tens = Math.floor(number / 10);

  // 3. חילוץ ספרת האחדות (מודולו 10)
  let units = number % 10;

  // 4. חישוב סכום הספרות
  let sum = tens + units;

  // 5. הדפסת התוצאות
  console.log(`The generated number is: ${number}`);
  console.log(`Tens: ${tens}, Units: ${units}`);
  console.log(`The sum of the digits is: ${sum}`);
}

// הפעלת הפונקציה
showSumOfTwoDigitNumber();

function showReversedTwoDigitNumber() {
  // 1. הגרלת מספר דו-ספרתי (בין 10 ל-99)
  let number = Math.floor(Math.random() * 90) + 10;

  // 2. חילוץ ספרת העשרות וספרת האחדות
  let tens = Math.floor(number / 10);
  let units = number % 10;

  // 3. בניית המספר החדש (אחדות כפול 10 + עשרות)
  let reversedNumber = units * 10 + tens;

  // 4. הדפסת התוצאות
  console.log(`Original Number: ${number}`);
  console.log(`Reversed Number: ${reversedNumber}`);
}

// הפעלת הפונקציה
showReversedTwoDigitNumber();

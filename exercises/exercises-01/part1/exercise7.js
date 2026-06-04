function showHundredsDigitOf3DigitNumber() {
  // 1. הגרלת מספר תלת-ספרתי בלבד (בין 100 ל-999)
  let number = Math.floor(Math.random() * 900) + 100;

  // 2. חלוקה ב-100 ועיגול למטה - זה כל מה שצריך!
  let hundredsDigit = Math.floor(number / 100);

  // 3. הדפסת התוצאות
  console.log(`Original 3-digit Number: ${number}`);
  console.log(`The hundreds digit is: ${hundredsDigit}`);
}

showHundredsDigitOf3DigitNumber();

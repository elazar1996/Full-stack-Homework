function showSecondDigitFromRight() {
  // 1. הגרלת מספר אקראי בעל 4 ספרות (מ-1000 ועד 9999)
  // 9999 פחות 1000 ועוד 1 = 9000 אפשרויות
  let number = Math.floor(Math.random() * 9000) + 1000;

  // 2. "מחיקת" הספרה הימנית ביותר על ידי חלוקה ב-10 ועיגול למטה
  let numWithoutUnits = Math.floor(number / 10);

  // 3. שליפת הספרה השנייה (שהיא עכשיו הימנית ביותר) בעזרת מודולו 10
  let secondDigit = numWithoutUnits % 10;

  // 4. הדפסת התוצאות
  console.log(`Original Number: ${number}`);
  console.log(`The second digit from the right is: ${secondDigit}`);
}

// הפעלת הפונקציה
showSecondDigitFromRight();

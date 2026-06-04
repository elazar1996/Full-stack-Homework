function showGreaterValue() {
  // 1. הגרלת שני מספרים אקראיים (למשל בין 1 ל-50)
  let val1 = Math.floor(Math.random() * 50) + 1;
  let val2 = Math.floor(Math.random() * 50) + 1;

  // 2. הדפסת המספרים שהוגרלו
  console.log(`Value 1: ${val1}`);
  console.log(`Value 2: ${val2}`);
  console.log(`---`);

  // 3. תנאי הבדיקה: מי גדול יותר?
  if (val1 > val2) {
    console.log(`The greater value is: ${val1}`);
  } else {
    // ה-else מטפל גם במצב ש-val2 גדול יותר, וגם במצב שהם שווים
    console.log(`The greater value is: ${val2}`);
  }
}

// הפעלת הפונקציה
showGreaterValue();

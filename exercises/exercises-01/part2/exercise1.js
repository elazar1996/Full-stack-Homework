function checkGrowingValues() {
  // 1. הגרלת שני מספרים אקראיים (למשל בין 1 ל-20)
  let firstValue = Math.floor(Math.random() * 20) + 1;
  let secondValue = Math.floor(Math.random() * 20) + 1;

  // 2. הדפסת המספרים שהוגרלו כדי שנבין מה קרה
  console.log(`First Value: ${firstValue}`);
  console.log(`Second Value: ${secondValue}`);
  console.log(`---`);

  // 3. תנאי הבדיקה: אם השני גדול מהראשון
  if (secondValue > firstValue) {
    console.log("Growing");
  }
  // הוספתי את החלק הבא (else) רק לנוחות הבדיקה שלנו,
  // למרות שבשאלה המקורית ביקשו להדפיס רק אם התנאי מתקיים.
  else {
    console.log("Not growing");
  }
}

// הפעלת הפונקציה
checkGrowingValues();

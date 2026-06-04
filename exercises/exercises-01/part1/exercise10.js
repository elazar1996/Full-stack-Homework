function showNearestGreaterEven() {
  // 1. הגרלת מספר עשרוני אקראי (למשל בין 0 ל-20)
  // השתמשנו ב-toFixed(1) כדי לקבל ספרה אחת אחרי הנקודה, ואז ב-parseFloat כדי שיישאר מספר
  let number = parseFloat((Math.random() * 20).toFixed(1));

  // 2. מציאת המספר השלם הבא שגדול ממנו
  let nextInt = Math.floor(number) + 1;

  // 3. הגדרת משתנה לתשובה הסופית
  let nextEven;

  // 4. בדיקת זוגיות למספר השלם הבא
  if (nextInt % 2 === 0) {
    nextEven = nextInt; // אם הוא זוגי, מצאנו את התשובה
  } else {
    nextEven = nextInt + 1; // אם הוא אי-זוגי, נוסיף לו 1 כדי שיהיה זוגי
  }

  // 5. הדפסת התוצאות
  console.log(`Original Number: ${number}`);
  console.log(`Nearest even integer greater than it: ${nextEven}`);
}

// הפעלת הפונקציה
showNearestGreaterEven();

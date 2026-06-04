function checkIncreasingSequence() {
  // הגרלת שלושה מספרים אקראיים בין 1 ל-100 לשם הבדיקה
  let num1 = Math.floor(Math.random() * 100) + 1;
  let num2 = Math.floor(Math.random() * 100) + 1;
  let num3 = Math.floor(Math.random() * 100) + 1;

  console.log(`Numbers: ${num1}, ${num2}, ${num3}`);

  // בדיקה האם הסדרה עולה ממש
  if (num2 > num1 && num3 > num2) {
    console.log("Increasing");
  } else {
    // השאלה לא דרשה להדפיס כלום אם התנאי לא מתקיים,
    // אבל הוספתי הדפסה כדי שיהיה ברור מה קרה בהרצה
    console.log("Not strictly increasing");
  }
}

// קריאה לפונקציה כדי לראות את התוצאה
checkIncreasingSequence();

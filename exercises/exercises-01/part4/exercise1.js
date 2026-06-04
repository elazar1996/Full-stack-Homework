function printNumbersBetween(start, end) {
  console.log(`First number: ${start}`);
  console.log(`Second number: ${end}`);

  let result = ""; // משתנה שיאגור את כל המספרים בשורה אחת נוחה לקריאה

  // בדיקה האם הסדרה עולה או יורדת
  if (start <= end) {
    // לולאה עולה
    for (let i = start; i <= end; i++) {
      result += i + " ";
    }
  } else {
    // לולאה יורדת (אם המספר הראשון גדול מהשני)
    for (let i = start; i >= end; i--) {
      result += i + " ";
    }
  }

  console.log(`Sequence: ${result.trim()}`);
  console.log("-----------------------");
}

// הגרלת מספרים אקראיים (למשל בין 1 ל-20 כדי שלא תהיה ריצה ארוכה מדי)
let randomStart = Math.floor(Math.random() * 20) + 1;
let randomEnd = Math.floor(Math.random() * 20) + 1;

// קריאה לפונקציה
printNumbersBetween(randomStart, randomEnd);

function countDigits() {
  // הגרלת מספר בין 1 ל-9999
  let num = Math.floor(Math.random() * 9999) + 1;
  console.log(`The number is: ${num}`);

  // בדיקת כמות הספרות
  if (num < 10) {
    console.log("1 digit");
  } else if (num < 100) {
    console.log("2 digits");
  } else if (num < 1000) {
    console.log("3 digits");
  } else {
    // אם המספר לא קטן מ-1000, הוא חייב להיות בין 1000 ל-9999
    console.log("4 digits");
  }
}

countDigits();

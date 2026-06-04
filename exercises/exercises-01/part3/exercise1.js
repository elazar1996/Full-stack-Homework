function checkNumberSign() {
  // הגרלת מספר בין 100- ל-100 (מעולה!)
  let num = Math.floor(Math.random() * 201) - 100;
  console.log(`The number is: ${num}`);

  if (num < 0) {
    console.log("Negative");
  } else if (num === 0) {
    // תיקון: שימוש ב-=== לשם השוואה
    console.log("Zero");
  } else {
    console.log("Positive");
  }
}

checkNumberSign();

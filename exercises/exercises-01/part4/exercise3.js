function sumDivisibleByThree(n) {
  let sum = 0; // אתחול משתנה הסכום באפס

  // לולאה שרצה מ-1 עד N
  for (let i = 1; i <= n; i++) {
    // בדיקה האם המספר הנוכחי מתחלק ב-3 ללא שארית
    if (i % 3 === 0) {
      sum += i; // אם כן, מוסיפים אותו לסכום המצטבר
    }
  }

  console.log(`N = ${n}`);
  console.log(`Sum of numbers divisible by 3: ${sum}`);
  console.log("-----------------------");
}

// הגרלת מספר אקראי בין 1 ל-20
let randomN = Math.floor(Math.random() * 20) + 1;

// קריאה לפונקציה
sumDivisibleByThree(randomN);

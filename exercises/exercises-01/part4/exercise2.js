function calculateFactorial(n) {
  // משתנה שיאגור את תוצאת ההכפלה.
  // חייבים להתחיל מ-1 (ולא מ-0), כי הכפלה באפס תאפס את הכל!
  let factorial = 1;

  // לולאה שרצה מ-1 ועד N (כולל)
  for (let i = 1; i <= n; i++) {
    factorial *= i; // זהה לכתיבה: factorial = factorial * i
  }

  console.log(`N = ${n}`);
  console.log(`${n}! = ${factorial}`);
  console.log("-----------------------");
}

// הגרלת מספר אקראי קטן יחסית (בין 1 ל-10)
// הערה: עצרת של מספרים גדולים גדלה מהר מאוד! למשל 10! שווה ל-3,628,800
let randomN = Math.floor(Math.random() * 10) + 1;

// קריאה לפונקציה
calculateFactorial(randomN);

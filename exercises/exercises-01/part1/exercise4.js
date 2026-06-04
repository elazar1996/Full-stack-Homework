function showRandomMovieLength() {
  // 1. הגרלת אורך סרט אקראי בדקות (מספר בין 60 ל-200)
  // טווח: 200 פחות 60 שווה 140. ועוד 1 שווה 141 אפשרויות.
  let totalMinutes = Math.floor(Math.random() * 141) + 60;

  // 2. חישוב השעות השלמות
  let hours = Math.floor(totalMinutes / 60);

  // 3. חישוב שארית הדקות בעזרת מודולו
  let minutes = totalMinutes % 60;

  // 4. הדפסת התוצאות
  console.log(`Input: ${totalMinutes}`);
  console.log(`Output: ${hours} hour(s) and ${minutes} minute(s)`);
}

// הפעלת הפונקציה
showRandomMovieLength();

function showNumbersBetweenPairs() {
  // 1. מדמים קלט של 10 מספרים עוקבים
  let inputs = [9, 12, 8, 8, 10, 7, 7, 5, 6, 6];

  // מערך שישמור את התוצאה הסופית כדי שנוכל להדפיס בשורה אחת
  let result = [];

  // 2. שומרים את המספר הראשון ומדפיסים אותו מיד
  let prev = inputs[0];
  result.push(prev);

  // 3. הלולאה החיצונית: רצה על 9 המספרים הנותרים
  for (let i = 1; i < inputs.length; i++) {
    let curr = inputs[i];

    // 4. הלולאות הפנימיות (סופרים למעלה או למטה)
    if (curr > prev) {
      // אם המספר החדש גדול יותר -> סופרים למעלה
      for (let j = prev + 1; j <= curr; j++) {
        result.push(j);
      }
    } else if (curr < prev) {
      // אם המספר החדש קטן יותר -> סופרים למטה
      for (let j = prev - 1; j >= curr; j--) {
        result.push(j);
      }
    } else {
      // אם המספרים שווים (כמו 8 ואחריו 8) -> פשוט נוסיף את המספר שוב
      result.push(curr);
    }

    // 5. מעדכנים את המספר הקודם להיות המספר הנוכחי, לקראת הסיבוב הבא!
    prev = curr;
  }

  // 6. הדפסת התוצאות
  console.log(`Input:  ${inputs.join(", ")}`);
  console.log(`Output: ${result.join(", ")}`);
}

// הפעלת הפונקציה
showNumbersBetweenPairs();

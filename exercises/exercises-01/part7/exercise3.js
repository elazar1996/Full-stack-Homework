function findRowWithHighestSum() {
  let matrix = [];
  let size = 10;

  // משתני הזיכרון שלנו
  let maxSum = 0;
  let maxRowIndex = 0;

  // 1. בניית המטריצה וחישוב הסכומים באותו מהלך
  for (let i = 0; i < size; i++) {
    let row = [];
    let currentRowSum = 0; // מתאפס בכל שורה מחדש

    for (let j = 0; j < size; j++) {
      let randomVal = Math.floor(Math.random() * 20);
      row.push(randomVal);

      // מוסיפים את הערך בתא לסכום השורה הנוכחית
      currentRowSum += randomVal;
    }

    matrix.push(row);

    // 2. בסוף השורה בודקים: האם היא אלופת הסכומים החדשה?
    if (currentRowSum > maxSum) {
      maxSum = currentRowSum; // שומרים את הסכום המנצח
      maxRowIndex = i; // שומרים את האינדקס של השורה
    }
  }

  // 3. הדפסה ברורה כדי שנוכל לאמת את התוצאה
  console.log("Matrix rows and their sums:");
  console.log("---------------------------");
  for (let i = 0; i < size; i++) {
    // הדפסת השורה עצמה ומיד אחריה הסכום שלה
    console.log(`Row ${i} => [ ${matrix[i].join(", ")} ]`);
  }

  console.log("---------------------------");
  console.log(`The row with the highest sum is index: ${maxRowIndex}`);
  console.log(`(Its sum was ${maxSum})`);
}

// הפעלת הפונקציה
findRowWithHighestSum();

function zeroOutMultiples() {
  let matrix = [];
  let size = 10;

  // 1. בניית המטריצה המקורית עם מספרים אקראיים (1 עד 50)
  for (let i = 0; i < size; i++) {
    let row = [];
    for (let j = 0; j < size; j++) {
      row.push(Math.floor(Math.random() * 50) + 1);
    }
    matrix.push(row);
  }

  console.log("Original Matrix (Before):");
  for (let i = 0; i < size; i++) {
    console.log(matrix[i].join("  "));
  }
  console.log("-----------------------------------------");

  // 2. סריקת המטריצה ואיפוס התאים
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let currentVal = matrix[i][j];

      // תנאי מקוצר מבריק:
      // האם הערך מתחלק ב-5 או מתחלק ב-7? אם כן תכניס 0, אחרת תשאיר את הערך הקיים
      matrix[i][j] =
        currentVal % 5 === 0 || currentVal % 7 === 0 ? 0 : currentVal;
    }
  }

  // 3. הדפסת המטריצה לאחר האיפוס
  console.log("Modified Matrix (After zeroing out):");
  for (let i = 0; i < size; i++) {
    console.log(matrix[i].join("  "));
  }
}

// הפעלת הפונקציה
zeroOutMultiples();

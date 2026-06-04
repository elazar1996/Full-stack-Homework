function createDiagonalMatrix() {
  let matrix = [];
  let size = 10; // גודל המטריצה

  // לולאה לשורות
  for (let i = 0; i < size; i++) {
    let row = [];

    // לולאה לעמודות
    for (let j = 0; j < size; j++) {
      // תנאי מקוצר: האם אנחנו על אחד האלכסונים?
      // הסימן || אומר "או" (OR)
      let cellValue = i === j || i + j === size - 1 ? 1 : 0;

      row.push(cellValue);
    }

    matrix.push(row);
  }

  // הדפסה יפהפייה של המטריצה כטבלה
  console.table(matrix);
}

// הפעלת הפונקציה
createDiagonalMatrix();

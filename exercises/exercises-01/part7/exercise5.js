function createConcentricFramesMatrix() {
  let matrix = [];
  let size = 10;

  // לולאות לבניית המטריצה
  for (let i = 0; i < size; i++) {
    let row = [];

    for (let j = 0; j < size; j++) {
      // 1. חישוב המרחק של התא לארבעת הקצוות של המטריצה:
      let top = i;
      let bottom = size - 1 - i;
      let left = j;
      let right = size - 1 - j;

      // 2. מציאת המרחק הקטן ביותר (הקצה הכי קרוב)
      let minDistance = Math.min(top, bottom, left, right);

      // 3. הערך שייכנס לתא הוא המרחק + 1
      row.push(minDistance + 1);
    }

    matrix.push(row);
  }

  // הדפסה
  console.log("Concentric Frames Matrix:");
  console.log("-------------------------");
  for (let i = 0; i < size; i++) {
    console.log(matrix[i].join("  "));
  }
}

// הפעלת הפונקציה
createConcentricFramesMatrix();

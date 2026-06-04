function orderTwoValues() {
  let num1 = Math.floor(Math.random() * 50) + 1;
  let num2 = Math.floor(Math.random() * 50) + 1;

  // הדפסת המספרים המקוריים כדי לראות מה הוגרל
  console.log(`Values: ${num1}, ${num2}`);

  // תנאי מקוצר: אם הראשון קטן מהשני, נדפיס ראשון ואז שני. אחרת, נדפיס שני ואז ראשון.
  console.log(
    `Ordered: ${num1 <= num2 ? num1 + ", " + num2 : num2 + ", " + num1}`,
  );
}

orderTwoValues();

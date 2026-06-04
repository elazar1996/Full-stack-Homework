function displayLargest() {
  // הגרלת שלושה מספרים בין 0 ל-100 לשם הבדיקה
  let num1 = Math.floor(Math.random() * 101);
  let num2 = Math.floor(Math.random() * 101);
  let num3 = Math.floor(Math.random() * 101);

  console.log(`Numbers are: ${num1}, ${num2}, ${num3}`);

  // בדיקה מי המספר הגדול ביותר
  if (num1 >= num2 && num1 >= num3) {
    console.log(`The largest is: ${num1}`);
  } else if (num2 >= num1 && num2 >= num3) {
    console.log(`The largest is: ${num2}`);
  } else {
    console.log(`The largest is: ${num3}`);
  }
}

displayLargest();

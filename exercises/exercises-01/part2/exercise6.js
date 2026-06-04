function calculateRaise(programmerName, currentSalary) {
  console.log(`Programmer: ${programmerName}`);
  console.log(`Current Salary: ${currentSalary} NIS`);

  // חישוב השכר החדש בעזרת תנאי מקוצר
  let newSalary =
    currentSalary * 1.1 <= 6000 ? currentSalary * 1.1 : currentSalary * 1.05;

  // הדפסת השכר החדש
  console.log(`New Salary: ${newSalary.toFixed(2)} NIS`);
  console.log("-----------------------");
}

// קריאה לפונקציה והעברת הנתונים אליה מבחוץ
calculateRaise("Yossi", Math.floor(Math.random() * 2001) + 4500);
calculateRaise("Avi", Math.floor(Math.random() * 2001) + 4500);

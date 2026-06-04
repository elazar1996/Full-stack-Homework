function calculateTax(employeeName, salary) {
  let tax = 0;

  if (salary <= 23000) {
    tax = salary * 0.1;
  } else if (salary <= 46000) {
    tax = (salary - 23000) * 0.2 + 2300;
  } else if (salary <= 120000) {
    tax = (salary - 46000) * 0.3 + 6900;
  } else if (salary <= 220000) {
    tax = (salary - 120000) * 0.4 + 29100;
  } else {
    tax = (salary - 220000) * 0.5 + 69100;
  }

  // הדפסה מסודרת של הנתונים
  console.log(`Freelancer: ${employeeName}`);
  console.log(`Annual Income: ${salary} NIS`);
  console.log(`Total Tax: ${tax} NIS`);
  console.log("-----------------------");
}

// הגרלת משכורות אקראיות מחוץ לפונקציה
let randomSalary1 = Math.floor(Math.random() * 300000) + 10000;
let randomSalary2 = Math.floor(Math.random() * 500000) + 50000;

// קריאה לפונקציה והעברת השם והמשכורת האקראית
calculateTax("Avraham", randomSalary1);
calculateTax("Yitzhak", randomSalary2);

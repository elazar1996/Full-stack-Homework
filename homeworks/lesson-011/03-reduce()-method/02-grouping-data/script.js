const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 },
];

// הפתרון: קיבוץ האנשים לאובייקט לפי מפתחות של גיל
const groupedByAge = people.reduce((acc, person) => {
  // אם המגירה של הגיל הזה עדיין לא קיימת, ניצור אותה כמערך ריק
  if (!acc[person.age]) {
    acc[person.age] = [];
  }
  // נדחוף את השם למגירה המתאימה
  acc[person.age].push(person.name);
  // נחזיר את האובייקט המעודכן לסיבוב הבא
  return acc;
}, {});

// בדיקת התוצאה:
console.log(groupedByAge);
// { '25': ['Alice', 'Bob'], '30': ['Charlie'] }

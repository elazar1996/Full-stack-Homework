// -- איטרציה --
const students = [
  { name: "John", passed: true },
  { name: "Jane", passed: false },
];

students.forEach((student) => {
  console.log(`${student.name}'s record has been reviewed.`);
});

// -- חיפוש ובדיקות תנאים --
let scores = [45, 65, 88, 92, 55];

// find: מחזיר את הערך הראשון שעונה על התנאי
let highScore = scores.find((score) => score > 85); // יחזיר 88
console.log(highScore);

// every: מחזיר true רק אם כל האיברים עונים על התנאי
let allAbove40 = scores.every((score) => score > 40); // יחזיר true
console.log(allAbove40);

// some: מחזיר true אם לפחות איבר אחד עונה על התנאי
let anyBelow50 = scores.some((score) => score < 50); // יחזיר true (בגלל ה-45)
console.log(anyBelow50);

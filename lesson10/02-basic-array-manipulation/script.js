let tasks = ["wash dishes", "do laundry"];

// 1. הוספת פריט לסוף המערך באמצעות push
tasks.push("clean room");

// 2. הוספת פריט לתחילת המערך באמצעות unshift
tasks.unshift("buy groceries");
console.log(tasks);

// 3. הסרת הפריט האחרון ושמירתו במשתנה באמצעות pop
let completedTask = tasks.pop(); // מכיל את 'clean room'

// 4. הסרת הפריט הראשון ושמירתו במשתנה באמצעות shift
let skippedTask = tasks.shift(); // מכיל את 'buy groceries'

console.log(completedTask);
console.log(skippedTask);
console.log(tasks);

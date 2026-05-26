// -- חלק 1: העתקת מערכים --
let original = [1, 2, 3];

// דרך 1: שימוש באופרטור ה-Spread (פיזור)
let copy1 = [...original];
console.log("1", copy1);

// דרך 2: שימוש במתודה slice ללא פרמטרים
let copy2 = original.slice();
console.log("2", copy2);

// -- חלק 2: שילוב וחיבור --
let group1 = ["Alice", "Bob"];
let group2 = ["Charlie", "Dave"];

// שילוב המערכים באמצעות concat (אפשר גם עם אופרטור spread)
let allUsers = group1.concat(group2); // ['Alice', 'Bob', 'Charlie', 'Dave']
console.log(allUsers);

// הפיכת המערך למחרוזת המופרדת במקף
let usersString = allUsers.join(" - ");
// התוצאה: "Alice - Bob - Charlie - Dave"
console.log(usersString);

let person1 = {
  name: "Elazar",
  age: 29,
};

let person2 = person1;
person2.age = 99;

console.log("person1 age:", person1.age);
console.log("person2 age:", person2.age);

let score1 = 85;
let score2 = score1;
score2 = 100;
console.log("score1:", score1);
console.log("score2:", score2);

//בגלל שאוביקטים זה הפניה כך שאני אומר שאחד שווה לשני לא נוצר מישתנה חדש אלה הוא מפנה אותו לאותו כתובת שהשני נימצא לכן שאני משנה את אחד מהם גם השני מישתנה כי זה אותו כתובת וכשאני משווה מישתנה פרימיטיבי הוא מייצר מישתנה חדש בזיכרון עם אותו ערך ולכן שמשנים במקום אחד לא מישתנה במקום השני
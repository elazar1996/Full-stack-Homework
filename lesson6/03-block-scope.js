let secretMessage = "Hello";

if (true) {
let secretMessage = "Goodbye";
let hackerMessage = "I am inside!";
console.log("Inside block: ", secretMessage);
}

console.log("Outside block 1: ", secretMessage);
console.log("Outside block 2: ", hackerMessage);

//1.  ב-JavaScript, משתנים שמוגדרים בעזרת let (או const) קיימים ומוכרים רק בתוך הבלוק שבו הם הוגדרו. ברגע שהבלוק מסתיים , המשתנה hackerMessage מפסיק להיות זמין ואי אפשר לגשת אליו יותר.

//2. כשיוצרים מישתנה בתוך בלוק עם אותו שם של מישתנה מחוץ לבלוק  זה לא משנה את המשתנה הקיים אלא מייצר מישתנה חדש לגמרי בעל אותו שם
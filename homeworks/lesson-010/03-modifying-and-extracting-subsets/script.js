let months = ["Jan", "March", "April", "June"];
console.log("1", months);

// 1. שימוש ב-splice להכנסת 'Feb' באינדקס 1, ומחיקת 0 איברים
months.splice(1, 0, "Feb");
// כעת המערך הוא: ['Jan', 'Feb', 'March', 'April', 'June']
console.log("2", months);

// 2. שימוש ב-slice לחילוץ החודשים (מאינדקס 2 עד 4, לא כולל 4)
let springMonths = months.slice(2, 4);
// springMonths שווה ל-['March', 'April']
// months נשאר שלם.
console.log(springMonths);

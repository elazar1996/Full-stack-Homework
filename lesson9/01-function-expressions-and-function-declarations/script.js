declaration();

function declaration() {
  console.log("declaration");
}

expression();

const expression = function () {
  console.log("expression");
};
//כאשר הפונקציה היא declaration ה javaScript עושה פעולת hoist ומעלה את הפונקצייה למעלה
//אבל שהפונקצייה expression  הוא לא מעלה את הפונקציה למעלה לכן אי אפשר להפעיל את הפונקצייה לפני ןלכן הוא זורק שגיאה

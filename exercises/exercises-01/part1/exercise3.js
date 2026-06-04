function showRandomPotCapacity() {
  // 1. הגרלת קוטר ועומק אקראיים (מספרים חיוביים שלמים בין 10 ל-40)
  let diameter = Math.floor(Math.random() * 31) + 10;
  let depth = Math.floor(Math.random() * 31) + 10;

  // 2. חישוב הרדיוס (קוטר חלקי 2)
  let radius = diameter / 2;

  // 3. חישוב שטח הבסיס (פאי כפול רדיוס בריבוע)
  // ב-JavaScript הסימן ** מסמל חזקה, אז 2** אומר "בריבוע"
  let area = Math.PI * radius ** 2;

  // 4. חישוב הקיבולת (שטח כפול עומק)
  let capacity = area * depth;

  // 5. הדפסת התוצאות
  console.log(`Pot Diameter: ${diameter} cm`);
  console.log(`Pot Depth: ${depth} cm`);
  console.log(`---`);

  // שימוש ב-toFixed(2) כדי לא לקבל שבר עשרוני ארוך מדי בגלל הפאי
  console.log(`Pot Capacity (Volume): ${capacity.toFixed(2)} cubic cm`);
}

// הפעלת הפונקציה
showRandomPotCapacity();

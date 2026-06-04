function calculateSchoolAverages() {
  let totalSchoolSum = 0; // צובר את סך כל הציונים בבית הספר
  let totalStudents = 100;
  let gradesPerStudent = 10;
  let totalGrades = totalStudents * gradesPerStudent; // 1000 ציונים סך הכל

  // לולאה חיצונית: עוברת תלמיד-תלמיד
  for (let i = 1; i <= totalStudents; i++) {
    let studentSum = 0; // סכום הציונים של התלמיד הנוכחי (מתאפס כל פעם מחדש!)

    // לולאה פנימית: עוברת על 10 הציונים של התלמיד הספציפי הזה
    for (let j = 1; j <= gradesPerStudent; j++) {
      // מגרילים ציון בין 60 ל-100
      let grade = Math.floor(Math.random() * 41) + 60;
      studentSum += grade; // מוסיפים את הציון לסכום של התלמיד
    }

    // חישוב והדפסת הממוצע של התלמיד הנוכחי
    let studentAverage = studentSum / gradesPerStudent;
    console.log(`Student ${i} Average: ${studentAverage.toFixed(2)}`);

    // מוסיפים את סך הציונים של התלמיד הזה לסכום הכללי של בית הספר
    totalSchoolSum += studentSum;
  }

  // אחרי שסיימנו עם כל התלמידים, מחשבים את ממוצע בית הספר
  let schoolAverage = totalSchoolSum / totalGrades;
  console.log(`-----------------------------------`);
  console.log(`Overall School Average: ${schoolAverage.toFixed(2)}`);
}

// הפעלת הפונקציה
calculateSchoolAverages();

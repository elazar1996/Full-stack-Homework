function testPalindromeArrays() {
  // נגדיר שני מערכים בגודל 10 לבדיקה
  let palindromeArr = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];
  let normalArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // פונקציה שבודקת האם מערך הוא פולינדרום
  function isPalindrome(arr) {
    // רצים רק עד חצי המערך (במקרה שלנו, 5 פעמים)
    for (let i = 0; i < arr.length / 2; i++) {
      // בודקים: האם האיבר הנוכחי שונה מהאיבר הנגדי לו בסוף?
      // arr.length - 1 נותן את האינדקס האחרון, ופחות i מזיז אותנו אחורה בכל סיבוב
      if (arr[i] !== arr[arr.length - 1 - i]) {
        return false; // ברגע שמצאנו חוסר התאמה, מחזירים שקר ועוצרים הכל
      }
    }
    return true; // אם הלולאה סיימה לערוץ בלי להחזיר שקר, זה בטוח פולינדרום
  }

  // הדפסה חכמה עם תנאי מקוצר
  console.log(`Array 1: [${palindromeArr.join(", ")}]`);
  console.log(`Is Palindrome? ${isPalindrome(palindromeArr) ? "Yes!" : "No"}`);
  console.log(`---`);
  console.log(`Array 2: [${normalArr.join(", ")}]`);
  console.log(`Is Palindrome? ${isPalindrome(normalArr) ? "Yes!" : "No"}`);
}

// הפעלת הפונקציה
testPalindromeArrays();

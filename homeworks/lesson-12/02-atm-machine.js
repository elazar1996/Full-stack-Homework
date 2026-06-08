class ATM {
  // מאפיין סטטי - מונה משותף לכל מכשירי הכספומט
  static totalTransactions = 0;

  // מאפיין פרטי - מונע גישה ישירה ליתרה מבחוץ
  #balance;

  constructor(bankName, initialBalance) {
    this.bankName = bankName;
    this.#balance = initialBalance;
  }

  // --- מתודות פרטיות (לוגיקה פנימית מאובטחת) ---

  #verifyPin(pin) {
    if (pin === 1234) {
      return true;
    } else {
      console.log("Wrong PIN");
      return false;
    }
  }

  #updateBalance(amount) {
    this.#balance -= amount;
  }

  #printReceipt(amount) {
    console.log(`Receipt: withdrew ${amount}. Remaining: ${this.#balance}`);
  }

  // --- מתודה ציבורית (הממשק החשוף למשתמש) ---

  withdraw(pin, amount) {
    // 1. אימות קוד סודי - אם מחזיר false, עוצרים את הפעולה
    if (!this.#verifyPin(pin)) {
      return;
    }

    // 2. בדיקה אם יש מספיק כסף בחשבון - אם לא, שגיאה ועצירה
    if (amount > this.#balance) {
      console.log("Insufficient funds");
      return;
    }

    // 3. אם הכל תקין - מבצעים את המשיכה, מדפיסים קבלה ומעדכנים את המונה הסטטי
    this.#updateBalance(amount);
    this.#printReceipt(amount);
    ATM.totalTransactions++;
  }
}

// ==========================================
// בדיקות (טסטים)
// ==========================================

const myAtm = new ATM("Leumi", 500);

// תרחיש 1: ניסיון משיכה עם קוד שגוי
console.log("--- Scenario 1: Wrong PIN ---");
myAtm.withdraw(9999, 100);
// פלט: Wrong PIN

// תרחיש 2: ניסיון משיכה של סכום גבוה מהיתרה (עם קוד נכון)
console.log("\n--- Scenario 2: Insufficient funds ---");
myAtm.withdraw(1234, 600);
// פלט: Insufficient funds

// תרחיש 3: משיכה תקינה ראשונה
console.log("\n--- Scenario 3: Successful withdrawal 1 ---");
myAtm.withdraw(1234, 200);
// פלט: Receipt: withdrew 200. Remaining: 300

// תרחיש 4: משיכה תקינה שנייה
console.log("\n--- Scenario 4: Successful withdrawal 2 ---");
myAtm.withdraw(1234, 50);
// פלט: Receipt: withdrew 50. Remaining: 250

// בדיקת המונה הסטטי הכללי של העסקאות
console.log(
  `\nTotal successful transactions across all ATMs: ${ATM.totalTransactions}`,
);
// פלט: Total successful transactions across all ATMs: 2

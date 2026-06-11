// ==========================================
// 1. מחלקת האב: PaymentMethod
// ==========================================
class PaymentMethod {
  constructor(ownerName) {
    this.ownerName = ownerName;
  }

  // מתודה כללית שאמורה להידרס על ידי הבנים
  pay(amount) {
    console.log("pay() not implemented");
  }

  // הפונקציה הזו משותפת לכולם - קוראת ל-pay ומוציאה קבלה
  receipt(amount) {
    this.pay(amount); // הפעלת הפולימורפיזם!
    console.log(`Receipt sent to ${this.ownerName}`);
  }
}

// ==========================================
// 2. כרטיס אשראי: CreditCard
// ==========================================
class CreditCard extends PaymentMethod {
  constructor(ownerName, cardNumber) {
    super(ownerName); // קריאה לבנאי של PaymentMethod
    this.cardNumber = cardNumber; // שומרים את המספר כטקסט (String)
  }

  // דריסה (Override) של הפונקציה pay
  pay(amount) {
    // שליפת 4 הספרות האחרונות
    const last4 = this.cardNumber.slice(-4);
    console.log(`Charging ${amount} NIS to card ending in ${last4}`);
  }
}

// ==========================================
// 3. פייפאל: PayPal
// ==========================================
class PayPal extends PaymentMethod {
  constructor(ownerName, email) {
    super(ownerName);
    this.email = email;
  }

  pay(amount) {
    console.log(`Sending ${amount} NIS via PayPal to ${this.email}`);
  }
}

// ==========================================
// 4. העברה בנקאית: BankTransfer
// ==========================================
class BankTransfer extends PaymentMethod {
  constructor(ownerName, iban) {
    super(ownerName);
    this.iban = iban;
  }

  pay(amount) {
    console.log(`Transferring ${amount} NIS from IBAN ${this.iban}`);
  }
}

// ==========================================
// 5. בדיקה והדגמת פולימורפיזם
// ==========================================

// יצירת מערך עם מופע אחד מכל סוג של אמצעי תשלום
const payments = [
  new CreditCard("Yossi Cohen", "4580123456789012"),
  new PayPal("Avi Levi", "avi@example.com"),
  new BankTransfer("Israel Israeli", "IL1234567890"),
];

console.log("--- Processing Payments ---");

// לולאה שעוברת על כל התשלומים ומפעילה את receipt
for (let method of payments) {
  method.receipt(500);
  console.log("-----------------------");
}

// ==========================================
// 1. מחלקת האב: Notification
// ==========================================
class Notification {
  constructor(sender, message) {
    this.sender = sender;
    this.message = message;
    this.sent = false; // ברירת מחדל: עדיין לא נשלח
  }

  // מתודה שתדרס על ידי המחלקות היורשות
  send() {
    console.log("send() not implemented");
  }

  // מתודה משותפת שמנהלת את הלוגיקה של השליחה והלוג
  log() {
    this.send(); // פולימורפיזם: מפעיל את ה-send של האובייקט הספציפי
    this.sent = true; // עדכון הסטטוס
    console.log(`[LOG] notification from ${this.sender} sent: ${this.sent}`);
  }
}

// ==========================================
// 2. התראת אימייל: EmailNotification
// ==========================================
class EmailNotification extends Notification {
  constructor(sender, message, toEmail) {
    super(sender, message); // מעביר לאב את מה שהוא צריך
    this.toEmail = toEmail; // מוסיף מאפיין ייחודי לאימייל
  }

  // דריסה של מתודת send
  send() {
    console.log(`Email to ${this.toEmail}: ${this.message}`);
  }
}

// ==========================================
// 3. התראת SMS: SMSNotification
// ==========================================
class SMSNotification extends Notification {
  constructor(sender, message, phone) {
    super(sender, message);
    this.phone = phone;
  }

  send() {
    console.log(`SMS to ${this.phone}: ${this.message}`);
  }
}

// ==========================================
// 4. התראת פוש: PushNotification
// ==========================================
class PushNotification extends Notification {
  constructor(sender, message, deviceId) {
    super(sender, message);
    this.deviceId = deviceId;
  }

  send() {
    console.log(`Push to device ${this.deviceId}: ${this.message}`);
  }
}

// ==========================================
// 5. לולאת בדיקה ובונוס (Filter)
// ==========================================

// יצירת המערך עם ההתראות השונות
const notifications = [
  new EmailNotification(
    "System",
    "Welcome to our service!",
    "user@example.com",
  ),
  new SMSNotification("Bank", "Your verification code is 1234", "050-1234567"),
  new PushNotification("WhatsApp", "You have a new message", "device_abc123"),
];

console.log("--- Sending Notifications ---");

// מעבר על המערך והפעלת log על כולם
for (let notif of notifications) {
  notif.log();
  console.log("---------------------------");
}

// --- בונוס: סינון וספירה ---
// שימוש ב-filter כדי למצוא רק את ההתראות שסטטוס sent שלהן הוא true
const sentNotifications = notifications.filter((notif) => notif.sent === true);

console.log(
  `\nBonus: Total notifications sent successfully: ${sentNotifications.length}`,
);

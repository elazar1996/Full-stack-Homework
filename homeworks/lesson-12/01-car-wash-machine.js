class CarWash {
  // מאפיין סטטי - שייך למחלקה עצמה ומשותף לכל המופעים
  static totalWashes = 0;

  constructor(carModel, washType) {
    this.carModel = carModel;
    this.washType = washType; // 'basic' / 'full'
  }

  // --- מתודות פרטיות (מוסתרות מהעולם החיצוני) ---

  #spray() {
    console.log("Spraying water...");
  }

  #applysoap() {
    console.log("Applying soap...");
  }

  #dry() {
    console.log("Drying car...");
  }

  // --- מתודה ציבורית (הממשק היחיד שחשוף החוצה) ---

  startWash() {
    // הפעלת המתודות הפרטיות לפי הסדר
    this.#spray();
    this.#applysoap();

    // בדיקה אם סוג השטיפה דורש גם ייבוש
    if (this.washType === "full") {
      this.#dry();
    }

    // העלאת המונה הסטטי ב-1
    CarWash.totalWashes++;

    // הדפסת הודעת הסיום
    console.log(
      `${this.carModel} wash complete. Total washes today: ${CarWash.totalWashes}`,
    );
  }
}

// ==========================================
// בדיקת הקוד (Expected output)
// ==========================================

const wash1 = new CarWash("Toyota", "basic");
wash1.startWash();
// פלט:
// Spraying water...
// Applying soap...
// Toyota wash complete. Total washes today: 1

const wash2 = new CarWash("BMW", "full");
wash2.startWash();
// פלט:
// Spraying water...
// Applying soap...
// Drying car...
// BMW wash complete. Total washes today: 2

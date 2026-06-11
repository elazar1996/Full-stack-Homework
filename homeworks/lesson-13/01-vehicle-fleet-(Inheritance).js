// ==========================================
// 1. Vehicle Class
// ==========================================
class Vehicle {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
    this.running = false;
  }

  // המתודות נכתבות ישר בתוך ה-class, בלי צורך לכתוב prototype!
  start() {
    this.running = true;
    console.log(this.brand + " engine started");
  }

  stop() {
    this.running = false;
    console.log(this.brand + " engine stopped");
  }
}

// ==========================================
// 2. Car Class
// ==========================================
class Car extends Vehicle {
  constructor(brand, speed, doors) {
    // קריאה ל-constructor של מחלקת האב (Vehicle)
    super(brand, speed);
    this.doors = doors;
  }

  openTrunk() {
    console.log(this.brand + " trunk is open");
  }
}

// ==========================================
// 3. ElectricCar Class
// ==========================================
class ElectricCar extends Car {
  constructor(brand, speed, doors, batteryLevel) {
    // קריאה ל-constructor של מחלקת האב (Car)
    super(brand, speed, doors);
    this.batteryLevel = batteryLevel;
  }

  charge() {
    this.batteryLevel = 100;
    console.log(this.brand + " is fully charged");
  }
}

// ==========================================
// 4. Verification & Testing
// ==========================================

const genericVehicle = new Vehicle("GenericBus", 80);
const gasCar = new Car("Toyota", 180, 4);
const evCar = new ElectricCar("Tesla", 250, 4, 45);

console.log("--- Testing methods ---");
evCar.start(); // Tesla engine started
gasCar.openTrunk(); // Toyota trunk is open
evCar.charge(); // Tesla is fully charged

console.log("\n--- Checking instanceof ---");
console.log(evCar instanceof ElectricCar); // true
console.log(evCar instanceof Car); // true
console.log(evCar instanceof Vehicle); // true

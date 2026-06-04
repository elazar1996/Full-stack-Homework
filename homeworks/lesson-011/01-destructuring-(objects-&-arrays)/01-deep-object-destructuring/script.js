const userProfile = {
  id: 402,
  username: "code_ninja",
  location: {
    country: "USA",
    city: "Seattle",
  },
  preferences: {
    hobbies: ["cycling", "reading", "gaming"],
  },
};

const {
  username: handle, // חילוץ ושינוי שם המשתנה
  location: { city }, // פירוק עמוק לתוך אובייקט location
  preferences: {
    hobbies: [firstHobby],
  }, // פירוק עמוק לתוך המערך hobbies
} = userProfile;

console.log(handle); // "code_ninja"
console.log(city); // "Seattle"
console.log(firstHobby); // "cycling"

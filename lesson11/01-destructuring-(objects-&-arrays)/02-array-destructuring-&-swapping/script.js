const scores = [92, 100, 88]; // המערך לא מסודר

// מיון המערך מהגבוה לנמוך, ואז פירוק
const [firstPlace, ...runnerUps] = [...scores].sort((a, b) => b - a);

console.log(firstPlace); // 100
console.log(runnerUps); // [92, 88]

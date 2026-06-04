const person = { name: "Clark Kent", occupation: "Reporter" };
const powers = { flight: true, strength: "superhuman" };

const superHero = { ...person, ...powers };

console.log(superHero);
// { name: 'Clark Kent', occupation: 'Reporter', flight: true, strength: 'superhuman' }

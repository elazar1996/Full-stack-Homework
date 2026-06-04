function processRandomNumbers() {
  let sum = 0;
  for (let index = 0; index < 3; index++) {
    const number = crypto.getRandomValues(new Int32Array(1))[0];
    console.log(`number ${index + 1}: = ${number}`);
    sum += number;
  }
  console.log(`sum: ${sum}, avrage: ${sum / 3}`);
}
processRandomNumbers();

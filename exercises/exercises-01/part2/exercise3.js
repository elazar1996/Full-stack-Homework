function showNearestGreaterEven() {
  let num = Math.floor(Math.random() * 50) + 1;
  console.log(num % 2 == 0 ? "even" : "Odd");
}
showNearestGreaterEven();

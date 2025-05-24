(function(n) {
  const factorial = num => num <= 1 ? 1 : num * factorial(num - 1);
  console.log(`Factorial of ${n} is ${factorial(n)}`);
})(5);
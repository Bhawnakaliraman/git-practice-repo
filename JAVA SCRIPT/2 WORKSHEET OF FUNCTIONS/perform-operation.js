function operate(a, b, func) {
  return func(a, b);
}
const multiply = (x, y) => x * y;
console.log(operate(3, 4, multiply));
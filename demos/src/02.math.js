function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a === 0 || b === 0 ? null : a / b;
}

export { sum, multiply, divide };

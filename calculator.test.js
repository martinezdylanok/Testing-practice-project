const Calculator = require('./calculator.js');
const currentCalculator = new Calculator();

test('Takes a number and adds to it the second number', () => {
  expect(currentCalculator.add(1, 2)).toBe(3);
});

test('Takes a number and subtracts from it the second number', () => {
    expect(currentCalculator.subtract(4, 2)).toBe(2);
});

test('Takes a number and divides it to the second number', () => {
    expect(currentCalculator.divide(4, 2)).toBe(2);
});

test('Takes a number and multiplies it to the second number', () => {
    expect(currentCalculator.multiply(2, 2)).toBe(4);
});
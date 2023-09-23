const capitalize = require('./capitalize.js');

test('Takes a string and returns it with the first character capitalized', () => {
  expect(capitalize("robertito")).toBe("Robertito");
});
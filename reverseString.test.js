const reverseString = require('./reverseString.js');

test('Takes a string and returns it reversed', () => {
  expect(reverseString("robertito")).toBe("otitrebor");
});
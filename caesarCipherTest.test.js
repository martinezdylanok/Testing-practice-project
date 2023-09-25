const caesarCipher = require('./caesarCipher.js');

test('Takes a string and a key factor, then shifts each letter of the string key amount of times', () => {
  expect(caesarCipher("b", 2)).toBe("d");
});
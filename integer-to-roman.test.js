const { intToRoman } = require('./integer-to-roman.js');

describe('test intToRoman', () => {
  it('should handle example 1', () => {
    expect(intToRoman(3)).toBe('III');
  });

  it('should handle example 2', () => {
    expect(intToRoman(4)).toBe('IV');
  });

  it('should handle example 3', () => {
    expect(intToRoman(9)).toBe('IX');
  });

  it('should handle example 4', () => {
    expect(intToRoman(58)).toBe('LVIII');
  });

  it('should handle example 5', () => {
    expect(intToRoman(1994)).toBe('MCMXCIV');
  });
});

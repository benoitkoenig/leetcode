const { myAtoi, getUsefulStringDelimiters } = require('./string-to-integer-atoi.js');

describe('should handle getUsefulStringDelimiters', () => {
  it('shoudle handle the first example', () => {
    expect(getUsefulStringDelimiters('42')).toEqual([0, 2]);
  });

  it('shoudle handle the second example', () => {
    expect(getUsefulStringDelimiters('   -42')).toEqual([3, 6]);
  });

  it('shoudle handle the third example', () => {
    expect(getUsefulStringDelimiters('4193 with words')).toEqual([0, 4]);
  });

  it('shoudle handle the fourth example', () => {
    expect(getUsefulStringDelimiters('words and 987')).toEqual([null, null]);
  });

  it('shoudle handle the fifth example', () => {
    expect(getUsefulStringDelimiters('-91283472332')).toEqual([0, 12]);
  });

  it('shoudle handle multiple signs in a row', () => {
    expect(getUsefulStringDelimiters('--3')).toEqual([0, 1]);
    expect(getUsefulStringDelimiters('++3+')).toEqual([0, 1]);
    expect(getUsefulStringDelimiters('   +-  +3')).toEqual([3, 4]);
    expect(getUsefulStringDelimiters('   -3  --')).toEqual([3, 5]);
  });
});

describe('should succeed in the example cases', () => {
  it('shoudle handle the first example', () => {
    expect(myAtoi('42')).toEqual(42);
  });

  it('shoudle handle the second example', () => {
    expect(myAtoi('   -42')).toEqual(-42);
  });

  it('shoudle handle the third example', () => {
    expect(myAtoi('4193 with words')).toEqual(4193);
  });

  it('shoudle handle the fourth example', () => {
    expect(myAtoi('words and 987')).toEqual(0);
  });

  it('shoudle handle the fifth example', () => {
    expect(myAtoi('-91283472332')).toEqual(-2147483648);
  });

  it('shoudle handle an empty string', () => {
    expect(myAtoi('')).toEqual(0);
  });
});

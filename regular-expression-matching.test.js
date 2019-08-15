const { isMatch } = require('./regular-expression-matching.js');

describe('test regexp matching', () => {
  it('should match valid matches', () => {
    expect(isMatch('abcd', '.*')).toBe(true);
    expect(isMatch('abcd', 'ab.*')).toBe(true);
    expect(isMatch('abcd', 'a.*cd')).toBe(true);
    expect(isMatch('abcd', 'a.*bcd')).toBe(true);
    expect(isMatch('abcd', '.*')).toBe(true);
    expect(isMatch('abcd', 'a*bcd')).toBe(true);
    expect(isMatch('abcd', 'aa*bcd')).toBe(true);
    expect(isMatch('abcd', 'ab.d')).toBe(true);
    expect(isMatch('abcd', 'a..d')).toBe(true);
    expect(isMatch('a', 'ab*')).toBe(true);
  });

  it('should not match invalid matches', () => {
    expect(isMatch('abcd', 'b.*')).toBe(false);
    expect(isMatch('abcd', 'ab.')).toBe(false);
    expect(isMatch('abcd', '.*dc')).toBe(false);
    expect(isMatch('aabcd', '.bcd')).toBe(false);
    expect(isMatch('aabcd', 'aaa.*bcd')).toBe(false);
    expect(isMatch('abcd', 'a.bc')).toBe(false);
    expect(isMatch('abcd', 'ab.cd')).toBe(false);
    expect(isMatch('a', '.*..a*')).toBe(false);
  });
});

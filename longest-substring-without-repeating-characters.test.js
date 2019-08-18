const { lengthOfLongestSubstring } = require('./longest-substring-without-repeating-characters.js');

describe('test length of longest substring', () => {
  it('should return the right length when including the first char', () => {
    expect(lengthOfLongestSubstring('abcdad')).toBe(4);
  });

  it('should return the right length when including the last char', () => {
    expect(lengthOfLongestSubstring('abcbdefg')).toBe(6);
  });

  it('should return the right length when in the middle of the string', () => {
    expect(lengthOfLongestSubstring('abcbdefghijbkb')).toBe(9);
  });

  it('should return the whole list when no duplicate', () => {
    expect(lengthOfLongestSubstring('abcd')).toBe(4);
  });

  it('should return 1 for all duplicates', () => {
    expect(lengthOfLongestSubstring('aaaaa')).toBe(1);
  });

  it('should return 0 for an empty list', () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
  });

  it('should handle the examples', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });
});

const { getPalindromeCenteredOnIndex, longestPalindrome } = require('./longest-palindromic-substring.js');

describe('test getPalindromeCenteredOnIndex', () => {
  it('should handle integer indexes', () => {
    expect(getPalindromeCenteredOnIndex('sdaduvf', 2)).toBe(3);
    expect(getPalindromeCenteredOnIndex('sdaduvf', 3)).toBe(1);
    expect(getPalindromeCenteredOnIndex('sdadads', 3)).toBe(7);
    expect(getPalindromeCenteredOnIndex('dadads', 1)).toBe(3);
  });

  it('should handle integer and a half indexes', () => {
    expect(getPalindromeCenteredOnIndex('sdaaduvf', 2.5)).toBe(4);
    expect(getPalindromeCenteredOnIndex('sdaduvf', 3.5)).toBe(0);
    expect(getPalindromeCenteredOnIndex('sdaddads', 3.5)).toBe(8);
    expect(getPalindromeCenteredOnIndex('addads', 1.5)).toBe(4);
  });
});

describe('test longestPalindrome', () => {
  it('should handle uneven palindromes', () => {
    expect(longestPalindrome('sdaduvf')).toBe('dad');
    expect(longestPalindrome('sdadads')).toBe('sdadads');
    expect(longestPalindrome('dadads')).toBe('dadad');
    expect(longestPalindrome('seddad')).toBe('dad');
    expect(longestPalindrome('daddes')).toBe('dad');
  });

  it('should handle even palindromes', () => {
    expect(longestPalindrome('sdaaduvf')).toBe('daad');
    expect(longestPalindrome('sdabuvf')).toBe('s');
    expect(longestPalindrome('sdaddads')).toBe('sdaddads');
    expect(longestPalindrome('addads')).toBe('adda');
    expect(longestPalindrome('sedadaad')).toBe('daad');
    expect(longestPalindrome('daadades')).toBe('daad');
  });
});

/* eslint-disable no-restricted-syntax */

/**
 * @param {string} s
 * @param {float} i
 * @return {float}
 */
const getPalindromeCenteredOnIndex = (s, i) => {
  'For a given string s and an index i, return the longest palindrome possible centered on i';

  let iMinus;
  let iPlus;
  if (i % 1 === 0) {
    iMinus = i - 1;
    iPlus = i + 1;
  } else {
    iMinus = i - 0.5;
    iPlus = i + 0.5;
  }
  while ((iMinus >= 0) && (iPlus < s.length) && (s[iMinus] === s[iPlus])) {
    iMinus -= 1;
    iPlus += 1;
  }
  return iPlus - iMinus - 1;
};

const signs = [-1, +1];

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  if (s === '') {
    return '';
  }
  let palindromeCenter = 0;
  let palindromeLength = 1;
  const stringCenter = 0.5 * s.length;
  for (let i = 0; i <= 0.5 * (s.length - palindromeLength); i += 0.5) {
    // When i > 0.5 * (s.length - palindromeLength), then the edges of s do not allow to get over palindromeLength
    for (const sign of signs) {
      const currentCenter = stringCenter + sign * i;
      const currentLength = getPalindromeCenteredOnIndex(s, currentCenter);
      if (currentLength > palindromeLength) {
        palindromeCenter = currentCenter;
        palindromeLength = currentLength;
      }
    }
  }
  return s.slice(palindromeCenter - palindromeLength / 2 + 1, palindromeCenter + palindromeLength / 2 + 1);
};

module.exports = {
  getPalindromeCenteredOnIndex,
  longestPalindrome,
};

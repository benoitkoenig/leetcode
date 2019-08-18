/* eslint-disable no-restricted-syntax */

const getLowestIndexOfDict = (dict) => {
  let minIndex = null;
  for (const i in dict) {
    if (minIndex === null || dict[i] < minIndex) {
      minIndex = dict[i];
    }
  }
  return minIndex;
};

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  let longestRow = 0;
  const dictOfLatestElements = {};
  for (let e = 0; e < s.length; e += 1) {
    const eChar = s[e];
    if (eChar in dictOfLatestElements) {
      const previousEIndex = dictOfLatestElements[eChar];
      const lowestAvailableChar = getLowestIndexOfDict(dictOfLatestElements);
      for (const j in dictOfLatestElements) {
        if (dictOfLatestElements[j] < previousEIndex) {
          delete dictOfLatestElements[j]; // Every character that were last seen before previousEIndex now include twice the currentChar
        }
      }
      const currentLength = e - lowestAvailableChar; // Best length for this value of e
      if (currentLength > longestRow) {
        longestRow = currentLength;
      }
    }
    dictOfLatestElements[eChar] = e;
  }
  const lowestIndexOfTheDict = getLowestIndexOfDict(dictOfLatestElements);
  const currentLength = s.length - lowestIndexOfTheDict;
  if (currentLength > longestRow) { // If the chosen array goes till the end of s
    longestRow = currentLength;
  }
  return longestRow;
};

module.exports = {
  lengthOfLongestSubstring,
};

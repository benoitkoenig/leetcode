const numbersAndSigns = '1234567890+-';
const numbers = '1234567890';

const numberValues = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};

const getUsefulStringDelimiters = (str) => {
  let startIndex = null;
  let endIndex = str.length;
  for (let i = 0; i < str.length; i += 1) {
    if (numbersAndSigns.includes(str[i])) {
      startIndex = i;
      break;
    }
    if (str[i] !== ' ') {
      return [null, null];
    }
  }
  if (startIndex === null) {
    return [null, null];
  }
  for (let i = startIndex + 1; i < str.length; i += 1) {
    if (!numbers.includes(str[i])) {
      endIndex = i;
      break;
    }
  }
  return [startIndex, endIndex];
};

const getSign = (str, start) => {
  if (str[start] === '-') return [start + 1, -1];
  if (str[start] === '+') return [start + 1, +1];
  return [start, +1];
};

const globalMax = 2 ** 31;

const getNaturalInt = (str, start, end, sign) => {
  let output = 0;
  const max = sign === 1 ? globalMax - 1 : globalMax;
  for (let i = start; i < end; i += 1) {
    output = 10 * output + numberValues[str[i]];
    if (output >= max) {
      return max;
    }
  }
  return output;
};

/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = (str) => {
  const [startPotentiallyIncludingSign, end] = getUsefulStringDelimiters(str);
  if (startPotentiallyIncludingSign === null) {
    return 0;
  }
  const [start, sign] = getSign(str, startPotentiallyIncludingSign);
  const naturalInt = getNaturalInt(str, start, end, sign);
  return sign * naturalInt;
};

module.exports = {
  getUsefulStringDelimiters,
  getSign,
  getNaturalInt,
  myAtoi,
};

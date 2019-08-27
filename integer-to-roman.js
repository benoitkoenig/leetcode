/**
 * @param {number} num
 * @return {string}
 */

const convertDigit = (digit, ones, fives, tens) => {
  if (digit === 0) return '';
  if (digit === 1) return ones;
  if (digit === 2) return ones + ones;
  if (digit === 3) return ones + ones + ones;
  if (digit === 4) return ones + fives;
  if (digit === 5) return fives;
  if (digit === 6) return fives + ones;
  if (digit === 7) return fives + ones + ones;
  if (digit === 8) return fives + ones + ones + ones;
  if (digit === 9) return ones + tens;
  return '';
};

const intToRoman = (num) => {
  const thousands = parseInt(num / 1000, 10);
  const hundreds = parseInt(num / 100, 10) % 10;
  const tens = parseInt(num / 10, 10) % 10;
  const units = num % 10;
  return convertDigit(thousands, 'M', '', '')
    + convertDigit(hundreds, 'C', 'D', 'M')
    + convertDigit(tens, 'X', 'L', 'C')
    + convertDigit(units, 'I', 'V', 'X');
};

module.exports = { intToRoman };

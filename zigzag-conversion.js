/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

const idOnRowZero = (index, numRows) => 2 * index * (numRows - 1); // Returns the index in the original string of the index-th character in the first row

const convert = (s, numRows) => {
  if (numRows === 1) {
    return s;
  }
  const rows = Array(numRows).fill('');
  const addIfExists = (index, rowId) => {
    if ((index >= 0) && (index < s.length)) {
      rows[rowId] += s[index];
    }
  };
  for (let i = 0; idOnRowZero(i, numRows) - numRows + 2 < s.length; i += 1) { // The whole column below lineZeroIndex exists
    const lineZeroIndex = idOnRowZero(i, numRows); // The character at line index goes to the first line
    addIfExists(lineZeroIndex, 0);
    for (let currentRow = 1; currentRow < numRows - 1; currentRow += 1) {
      addIfExists(lineZeroIndex - currentRow, currentRow);
      addIfExists(lineZeroIndex + currentRow, currentRow);
    }
    addIfExists(lineZeroIndex + numRows - 1, numRows - 1);
  }
  return rows.reduce((a, b) => a + b, '');
};

module.exports = {
  convert,
};

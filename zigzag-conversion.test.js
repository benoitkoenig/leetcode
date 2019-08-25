const { convert } = require('./zigzag-conversion.js');

describe('should convert strings', () => {
  it('shoudle handle PAYPALISHIRING 3', () => {
    expect(convert('PAYPALISHIRING', 3)).toEqual('PAHNAPLSIIGYIR');
  });

  it('shoudle handle PAYPALISHIRING 4', () => {
    expect(convert('PAYPALISHIRING', 4)).toEqual('PINALSIGYAHRPI');
  });

  it('shoudle handle PAYPALISHIRING 5', () => {
    expect(convert('PAYPALISHIRING', 5)).toEqual('PHASIYIRPLIGAN');
  });

  it('should handle a word ending in the rising part', () => {
    expect(convert('LUNELUNE', 3)).toEqual('LLUEUENN');
  });

  it('should handle a word ending on the last row', () => {
    expect(convert('TOTOTOT', 3)).toEqual('TTOOOTT');
  });

  it('should handle a word ending on the first row', () => {
    expect(convert('LUNELUNES', 3)).toEqual('LLSUEUENN');
  });

  it('should handle the case numRows=2', () => {
    expect(convert('LALALALA', 2)).toEqual('LLLLAAAA');
  });

  it('should handle the case numRows=1', () => {
    expect(convert('IDENTITY FUNCTION', 1)).toEqual('IDENTITY FUNCTION');
  });

  it('should handle a string shorter than numRows', () => {
    expect(convert('A', 3)).toEqual('A');
  });

  it('should handle an empty string', () => {
    expect(convert('', 3)).toEqual('');
  });
});

/*
P   A   H   N
A P L S I I G
Y   I   R

0 4 8 2 6
1357913579
2 6 0 4 8

0  6  2  8  4
1 57 13 79 35
24 80 46 02 6
3  9  5  1  7

0   8   6   4
1  79  57  35
2 6 0 4 8 2 6
35  13  91  7
4   2   0   8

0th line: all characters at pos i * (num_rows + 1) for i integer
Now, let j = character from line 0
n-th non final line: j - n, j + n
final line: j + n

3 -> 4
4 -> 6
5 -> 8

*/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

const isMatch = (s, p, indexS = 0, indexP = 0) => {
  if ((s.length === indexS) && (p.length === indexP)) {
    return true;
  }
  if ((p.length > indexP + 1) && (p[indexP + 1] === '*')) {
    for (let i = 0; i <= s.length - indexS; i += 1) {
      if (isMatch(s, p, indexS + i, indexP + 2)) {
        return true;
      }
      if ((s[indexS + i] !== p[indexP]) && (p[indexP] !== '.')) {
        break;
      }
    }
  } else if (((p[indexP] === '.') || (p[indexP] === s[indexS])) && s.length !== indexS) {
    if (isMatch(s, p, indexS + 1, indexP + 1)) {
      return true;
    }
  }
  return false;
};

module.exports = {
  isMatch,
};

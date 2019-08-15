/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

const isMatch = (s, p, index_s=0, index_p=0) => {
  if ((s.length === index_s) && (p.length === index_p)) {
    return true;
  }
  if ((p.length > index_p + 1) && (p[index_p + 1] === '*')) {
    for (let i=0 ; i<=s.length - index_s ; i++) {
      if (isMatch(s, p, index_s + i, index_p + 2)) {
        return true;
      }
      if ((s[index_s + i] !== p[index_p]) && (p[index_p] !== '.')) {
        break;
      }
    }
  } else if (((p[index_p] === '.') || (p[index_p] === s[index_s])) && s.length !== index_s) {
    if (isMatch(s, p, index_s + 1, index_p + 1)) {
      return true;
    }
  }
  return false;
};

module.exports = {
  isMatch,
}

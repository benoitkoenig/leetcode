/* eslint-disable no-continue */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export default (nums) => {
  if (nums.length < 3) {
    return [];
  }
  const numsSorted = nums.sort((a, b) => (a - b));
  const triplets = [];

  const map = {};
  nums.forEach((i) => {
    map[i] = (map[i] || 0) + 1;
  });

  for (let i1 = 0; numsSorted[i1] <= 0; i1 += 1) {
    if (numsSorted[i1] === numsSorted[i1 - 1]) {
      continue;
    }
    for (let i2 = i1 + 1; numsSorted[i1] + 2 * numsSorted[i2] <= 0; i2 += 1) {
      if (numsSorted[i2] === numsSorted[i2 - 1] && i2 !== i1 + 1) {
        continue;
      }
      const valI3 = -(numsSorted[i1] + numsSorted[i2]);
      if (map[valI3] && (map[valI3] - (numsSorted[i2] === valI3) - (numsSorted[i1] === valI3) >= 1)) {
        triplets.push([numsSorted[i1], numsSorted[i2], valI3]);
      }
    }
  }

  return triplets;
};

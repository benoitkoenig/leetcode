// Calculates the water area
const calcArea = (index1, index2, value1, value2) => Math.min(value1, value2) * Math.abs(index2 - index1);

// const maxAreaDummy = (heights) => {
//   let maxValue = 0;
//   for (let i1 = 0; i1 < heights.length; i1 += 1) {
//     for (let i2 = i1 + 1; i2 < heights.length; i2 += 1) {
//       const currentArea = calcArea(i1, i2, heights[i1], heights[i2]);
//       if (currentArea > maxValue) {
//         maxValue = currentArea;
//       }
//     }
//   }
//   return maxValue;
// };

const translateHeightsIntoSortedElement = (heights) => {
  'Translate height into a list of [value, index] and order them by value. Due to the sorting process, this is expected to be O(n log n)';

  const elements = heights.map((value, index) => [value, index]);
  const sortedByHeights = elements.sort((a, b) => b[0] - a[0]);
  return sortedByHeights;
};

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (heights) => {
  const maxWidth = heights.length;
  const elements = translateHeightsIntoSortedElement(heights);
  let maxValue = 0;
  for (let i = 1; i < elements.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      const currentValue = calcArea(elements[i][1], elements[j][1], elements[i][0], elements[j][0]);
      if (currentValue > maxValue) {
        maxValue = currentValue;
      }
    }
    if (elements[i][0] * maxWidth <= maxValue) {
      return maxValue;
    }
  }
  return maxValue;
};

module.exports = {
  maxArea,
};

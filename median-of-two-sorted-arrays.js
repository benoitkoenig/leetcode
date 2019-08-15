/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

const handleEdgeCase = (totalIndex, nums1, nums2) => {
  'Edge cases to be handled before getKthElement starts looping. Handles cases around 0 or list.length';

  if (nums1.length === 0) {
    return [nums2[totalIndex], nums2[totalIndex + 1]];
  }
  if ((nums1.length > totalIndex) && (nums1[totalIndex] < nums2[0])) {
    let kPlusOneElement = nums2[0];
    if ((nums1.length > totalIndex + 1) && (nums1[totalIndex + 1] < nums2[0])) {
      kPlusOneElement = nums1[totalIndex + 1];
    }
    return [nums1[totalIndex], kPlusOneElement];
  }
  if ((nums1.length <= nums2.length) && (nums1[nums1.length - 1] < nums2[totalIndex - nums1.length])) {
    return [nums2[totalIndex - nums1.length], nums2[totalIndex - nums1.length + 1]];
  }
  if ((nums1[nums1.length - 1] >= nums2[totalIndex - nums1.length]) && (nums1[nums1.length - 1] <= nums2[totalIndex - nums1.length + 1])) {
    return [nums1[nums1.length - 1], nums2[totalIndex - nums1.length + 1]];
  }
  return false;
};

const getKthAndKPlusOnethElement = (totalIndex, nums1, nums2, skipKPlusOne = false) => {
  'Get the Kth element in the sorted concatenation of nums1, nums2';

  const edgeCase1 = handleEdgeCase(totalIndex, nums1, nums2);
  if (edgeCase1 !== false) {
    return edgeCase1;
  }
  const edgeCase2 = handleEdgeCase(totalIndex, nums2, nums1);
  if (edgeCase2 !== false) {
    return edgeCase2;
  }
  const i1RangeValues = [Math.max(totalIndex - nums2.length + 1, 0), Math.min(totalIndex, nums1.length)];
  let i1 = parseInt((i1RangeValues[0] + i1RangeValues[1]) / 2, 10);
  let i2 = totalIndex - i1;
  while ((nums1[i1] > nums2[i2]) || (nums1[i1 + 1] < nums2[i2 - 1])) {
    if (nums1[i1] > nums2[i2]) {
      i1RangeValues[1] = i1;
    } else {
      i1RangeValues[0] = i1;
    }
    i1 = parseInt((i1RangeValues[0] + i1RangeValues[1]) / 2, 10);
    i2 = totalIndex - i1;
  }
  const candidates = [nums1[i1], nums1[i1 + 1], nums2[i2 - 1], nums2[i2]].sort((a, b) => (a - b));
  const kthElement = candidates[1];
  if (skipKPlusOne) {
    return [kthElement];
  }
  let kPlusOneElement = candidates[2];
  if ((nums1[i1 + 2] >= kthElement) && (nums1[i1 + 2] < kPlusOneElement)) {
    kPlusOneElement = nums1[i1 + 2];
  }
  if ((nums2[i2 + 1] >= kthElement) && (nums2[i2 + 1] < kPlusOneElement)) {
    kPlusOneElement = nums2[i2 + 1];
  }
  return [kthElement, kPlusOneElement];
};

const findMedianSortedArrays = (nums1, nums2) => {
  'Gets the median of the sorted concatenation of nums1 and nums2';

  if ((nums1.length === 1) && (nums2.length === 1)) {
    return 0.5 * (nums1[0] + nums2[0]);
  }
  if ((nums1.length + nums2.length) % 2 === 1) {
    const medianIndex = parseInt((nums1.length + nums2.length) / 2, 10);
    const median = getKthAndKPlusOnethElement(medianIndex, nums1, nums2, true);
    return median[0];
  }
  const medianLowIndex = parseInt((nums1.length + nums2.length) / 2, 10) - 1;
  const median = getKthAndKPlusOnethElement(medianLowIndex, nums1, nums2);
  return 0.5 * (median[0] + median[1]);
};

module.exports = {
  getKthAndKPlusOnethElement,
  findMedianSortedArrays,
};

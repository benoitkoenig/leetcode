/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

const handleEdgeCase = (total_index, nums1, nums2) => {
  'Edge cases to be handled before getKthElement starts looping. Handles cases around 0 or list.length'
  if (nums1.length === 0) {
    return [nums2[total_index], nums2[total_index + 1]];
  }
  if ((nums1.length > total_index) && (nums1[total_index] < nums2[0])) {
    let k_plus_one_element = nums2[0];
    if ((nums1.length > total_index + 1) && (nums1[total_index + 1] < nums2[0])) {
      k_plus_one_element = nums1[total_index + 1];
    }
    return [nums1[total_index], k_plus_one_element];
  }
  if ((nums1.length <= nums2.length) && (nums1[nums1.length - 1] < nums2[total_index - nums1.length])) {
    return [nums2[total_index - nums1.length], nums2[total_index - nums1.length + 1]];
  }
  if ((nums1[nums1.length - 1] >= nums2[total_index - nums1.length]) && (nums1[nums1.length - 1] <= nums2[total_index - nums1.length + 1])) {
    return [nums1[nums1.length - 1], nums2[total_index - nums1.length + 1]];
  }
  return false;
}

const getKthAndKPlusOnethElement = (total_index, nums1, nums2, skip_k_plus_one=false) => {
  'Get the Kth element in the sorted concatenation of nums1, nums2'
  const edgeCase1 = handleEdgeCase(total_index, nums1, nums2);
  if (edgeCase1 !== false) {
    return edgeCase1;
  }
  const edgeCase2 = handleEdgeCase(total_index, nums2, nums1);
  if (edgeCase2 !== false) {
    return edgeCase2;
  }
  const i1RangeValues = [Math.max(total_index - nums2.length + 1, 0), Math.min(total_index, nums1.length)];
  while (true) {
    const i1 = parseInt((i1RangeValues[0] + i1RangeValues[1]) / 2);
    const i2 = total_index - i1;
    if ((nums1[i1] <= nums2[i2]) && (nums1[i1 + 1] >= nums2[i2 - 1])) {
      const candidates = [nums1[i1], nums1[i1+1], nums2[i2-1], nums2[i2]].sort((a, b) => (a - b));
      const kthElement = candidates[1];
      if (skip_k_plus_one) {
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
    }
    if (nums1[i1] > nums2[i2]) {
      i1RangeValues[1] = i1;
    } else {
      i1RangeValues[0] = i1;
    }
  }
}

const findMedianSortedArrays = (nums1, nums2) => {
  'Gets the median of the sorted concatenation of nums1 and nums2'
  if ((nums1.length === 1) && (nums2.length === 1)) {
    return .5 * (nums1[0] + nums2[0]);
  }
  if ((nums1.length + nums2.length) % 2 === 1) {
    const median_index = parseInt((nums1.length + nums2.length) / 2);
    const median = getKthAndKPlusOnethElement(median_index, nums1, nums2, skip_k_plus_one=true);
    return median[0];
  } else {
    const median_low_index = parseInt((nums1.length + nums2.length) / 2) - 1;
    const median = getKthAndKPlusOnethElement(median_low_index, nums1, nums2);
    return .5 * (median[0] + median[1]);
  }
}

module.exports = {
  getKthAndKPlusOnethElement,
  findMedianSortedArrays,
};

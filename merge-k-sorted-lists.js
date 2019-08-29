// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const argMin = (list) => {
  'Given a list of numbers, return the index of the minimum. null values ignored, null returned if all values are null';

  let minIndex = null;
  let val = null;
  for (let i = 0; i < list.length; i += 1) {
    if ((list[i] !== null) && ((minIndex === null) || (list[i] < val))) {
      minIndex = i;
      val = list[minIndex];
    }
  }
  return minIndex;
};

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = (lists) => {
  const currentElements = Array(lists.length).fill(0).map((_, i) => lists[i]);
  const currentVals = Array(lists.length).fill(0).map((_, i) => lists[i] && lists[i].val);
  const originalListNode = new ListNode(null);
  let currentListNode = originalListNode;
  let nextEl = argMin(currentVals);
  while (nextEl !== null) {
    currentListNode.next = new ListNode(currentVals[nextEl]);
    currentElements[nextEl] = currentElements[nextEl].next;
    currentVals[nextEl] = currentElements[nextEl] && currentElements[nextEl].val;
    currentListNode = currentListNode.next;
    nextEl = argMin(currentVals);
  }
  return originalListNode.next;
};

module.exports = { ListNode, mergeKLists };

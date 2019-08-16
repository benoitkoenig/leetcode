/* eslint-disable no-param-reassign */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const addDigit = (l1, l2, currentElement, extra) => {
  if ((l1 === null) && (l2 === null)) {
    if (extra === 1) {
      currentElement.next = new ListNode(1);
    }
    return null;
  }
  let newVal = extra;
  let nextL1 = null;
  let nextL2 = null;
  if (l1 !== null) {
    newVal += l1.val;
    nextL1 = l1.next;
  }
  if (l2 !== null) {
    newVal += l2.val;
    nextL2 = l2.next;
  }
  let newExtra = 0;
  if (newVal >= 10) {
    newVal -= 10;
    newExtra = 1;
  }
  if (currentElement === null) { // On the first calculus, the first element is calculated
    const newElement = new ListNode(newVal);
    addDigit(nextL1, nextL2, newElement, newExtra);
    return newElement;
  }
  currentElement.next = new ListNode(newVal);
  addDigit(nextL1, nextL2, currentElement.next, newExtra);
  return null;
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => addDigit(l1, l2, null, 0);

module.exports = {
  addTwoNumbers,
  ListNode,
};

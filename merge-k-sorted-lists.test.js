const { ListNode, mergeKLists } = require('./merge-k-sorted-lists.js');

const createInput = (digits) => {
  const object = new ListNode(digits[0]);
  let newElement = object;
  for (let i = 1; i < digits.length; i += 1) {
    newElement.next = new ListNode(digits[i]);
    newElement = newElement.next;
  }
  return object;
};

describe('Test the mergeKLists method', () => {
  it('should work with the given example', () => {
    const lists = [
      createInput([1, 4, 5]),
      createInput([1, 3, 4]),
      createInput([2, 6]),
    ];
    expect(mergeKLists(lists)).toEqual(createInput([1, 1, 2, 3, 4, 4, 5, 6]));
  });

  it('should work with an empty one', () => {
    const lists = [null];
    expect(mergeKLists(lists)).toEqual(null);
  });
});

const { addTwoNumbers, ListNode } = require('./add-two-numbers.js');

const createInput = (digits) => {
  const object = new ListNode(digits[0]);
  let newElement = object;
  for (let i = 1; i < digits.length; i += 1) {
    newElement.next = new ListNode(digits[i]);
    newElement = newElement.next;
  }
  return object;
};

describe('test the sum of two numbers', () => {
  it('should fit example value', () => {
    const l1 = createInput([2, 4, 3]);
    const l2 = createInput([5, 6, 4]);
    const sum = addTwoNumbers(l1, l2);
    expect(sum.val).toBe(7);
    expect(sum.next.val).toBe(0);
    expect(sum.next.next.val).toBe(8);
    expect(sum.next.next.next).toBe(null);
  });

  it('should succeed with differently sized values', () => {
    const l1 = createInput([3, 2, 1, 2, 1]);
    const l2 = createInput([2, 2, 2]);
    const sum = addTwoNumbers(l1, l2);
    expect(sum.val).toBe(5);
    expect(sum.next.val).toBe(4);
    expect(sum.next.next.val).toBe(3);
    expect(sum.next.next.next.val).toBe(2);
    expect(sum.next.next.next.next.val).toBe(1);
    expect(sum.next.next.next.next.next).toBe(null);
  });

  it('should succeed with sums of 99s', () => {
    const l1 = createInput([9, 9]);
    const l2 = createInput([9, 9]);
    const sum = addTwoNumbers(l1, l2);
    expect(sum.val).toBe(8);
    expect(sum.next.val).toBe(9);
    expect(sum.next.next.val).toBe(1);
    expect(sum.next.next.next).toBe(null);
  });

  it('should succeed with a zero', () => {
    const l1 = createInput([2, 1]);
    const l2 = createInput([0]);
    const sum = addTwoNumbers(l1, l2);
    expect(sum.val).toBe(2);
    expect(sum.next.val).toBe(1);
    expect(sum.next.next).toBe(null);
  });

  it('should add zero to zero', () => {
    const l1 = createInput([0]);
    const l2 = createInput([0]);
    const sum = addTwoNumbers(l1, l2);
    expect(sum.val).toBe(0);
    expect(sum.next).toBe(null);
  });
});

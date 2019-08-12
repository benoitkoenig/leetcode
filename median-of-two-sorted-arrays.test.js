const {
    getKthAndKPlusOnethElement,
    findMedianSortedArrays,
} = require("./median-of-two-sorted-arrays.js");

const dumbSolution = (nums1, nums2) => {
    const allNums = nums1.concat(nums2).sort((a, b) => a - b);
    if (allNums.length % 2 === 1) {
        return allNums[Math.floor(allNums.length / 2)];
    }
    const lowerMedian = allNums[allNums.length / 2 - 1];
    const higherMedian = allNums[allNums.length / 2];
    return .5 * (lowerMedian + higherMedian);
}

const randint = (max) => Math.floor(Math.random() * max);

const getRandomSortedList = (length) => {
    return Array(length).fill(0).map(() => (2 * randint(5))).sort((a, b) => (a - b));
}

describe("dumbSolution", () => {
    it("should return median value", () => {
        expect(dumbSolution([2, 4], [1, 3])).toBe(2.5);
        expect(dumbSolution([2, 4], [1, 3, 5, 6])).toBe(3.5);
        expect(dumbSolution([1, 2, 3], [1, 2, 3])).toBe(2);
        expect(dumbSolution([1, 2, 3], [1, 2, 3, 4, 5])).toBe(2.5);
        expect(dumbSolution([1, 2, 3], [1, 2, 3, 4])).toBe(2);
        expect(dumbSolution([1, 2, 3, 4], [1, 2, 3])).toBe(2);
    });
});

describe("getKthElement", () => {
    it("should return the kth element", () => {
        expect(getKthAndKPlusOnethElement(3, [1, 3, 5, 7], [2, 4, 6])[0]).toEqual(4);
        expect(getKthAndKPlusOnethElement(3, [1, 2, 11, 12], [3, 4, 5, 6])[0]).toEqual(4);
        expect(getKthAndKPlusOnethElement(2, [1, 2, 4], [0, 3])[0]).toEqual(2);
        expect(getKthAndKPlusOnethElement(4, [0, 1, 2, 3], [4, 5, 6, 7])[0]).toEqual(4);
        expect(getKthAndKPlusOnethElement(5, [0, 1, 2, 3, 6, 7, 8], [4, 5])[0]).toEqual(5);
    });
});

describe("findMedianSortedArrays", () => {
    it("should have the same result as dumbSolution", () => {
        for (i=0 ; i<10000 ; i++) {
            const nums1 = getRandomSortedList(randint(10));
            const nums2 = getRandomSortedList(randint(10));
            if ((nums1.length !== 0) || (nums2.length !== 0)) {
                expect(findMedianSortedArrays(nums1, nums2)).toEqual(dumbSolution(nums1, nums2));
            }
        }
    });
});

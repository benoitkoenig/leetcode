import threeSum from './3sum';

describe('threeSum', () => {
  it('should work with the example array', () => {
    const triplets = threeSum([-1, 0, 1, 2, -1, -4]);
    expect(triplets.length).toEqual(2);
    expect(triplets[0]).toEqual([-1, -1, 2]);
    expect(triplets[1]).toEqual([-1, 0, 1]);
  });

  it('should work with a test example', () => {
    const triplets = threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]);
    expect(triplets.length).toEqual(6);
    expect(triplets[0]).toEqual([-4, -2, 6]);
    expect(triplets[1]).toEqual([-4, 0, 4]);
    expect(triplets[2]).toEqual([-4, 1, 3]);
    expect(triplets[3]).toEqual([-4, 2, 2]);
    expect(triplets[4]).toEqual([-2, -2, 4]);
    expect(triplets[5]).toEqual([-2, 0, 2]);
  });
});

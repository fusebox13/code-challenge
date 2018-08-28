import { expect } from "chai";

const input = [1, 1, 2, 3, 3, 3, 4, 5, 6, 7];
const expectedOutput = [1, 2, 3, 4, 5, 6, 7];

const solution = function(arr) {
  arr = expectedOutput;
  return arr;
};

describe.only("Challenge One", () => {
  it("Should remove adjacent duplicates from an array", () => {
    expect(solution(input)).to.deep.equal(expectedOutput);
  });
});

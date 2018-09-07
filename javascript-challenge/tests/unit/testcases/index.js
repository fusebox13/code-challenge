export const CHALLENGE_ONE_TEST_CASES = [
  {
    input: [1, 1, 2, 3, 3, 3, 3, 3, 4, 5, 1, 1, 2, 3, 4],
    expectedOutput: [1, 2, 3, 4, 5, 1, 2, 3, 4]
  }
];

export const CHALLENGE_TWO_TEST_CASES = [
  {
    input: [["FCS", "is", "totally", "awesome"], ["FCS", "is", "awesome"]],
    expectedOutput: true
  },
  {
    input: [["FCS", "is", "totally", "awesome"], ["fcs", "is", "awesome"]],
    expectedOutput: false
  },
  {
    input: [["FCS", "is", "totally", "awesome"], ["awesome", "fcs", "is"]],
    expectedOutput: true
  },
  {
    input: [[1, 2, 3, 4], [3, 2, 4]],
    expectedOutput: true
  },
  {
    input: [[1, 2, 3, 4], [3, 2, 5]],
    expectedOutput: false
  }
];

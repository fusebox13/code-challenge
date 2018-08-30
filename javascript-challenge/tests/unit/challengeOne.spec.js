import { expect } from "chai";
import { participants } from "@/code-challenge/registration";
import { CHALLENGE_ONE_TEST_CASES } from './testcases';

const input = [1, 1, 2, 3, 3, 3, 4, 5, 6, 7];
const expectedOutput = [1, 2, 3, 4, 5, 6, 7];

describe.only("Challenge One", () => {
  participants.forEach(participant => {
    context(participant.name + "'s solution", () => {
      it("Solved", () => {
        CHALLENGE_ONE_TEST_CASES.forEach(testCase => {
          expect(participant.solution(testCase.input)).to.deep.equal(testCase.expectedOutput);
        });
      });
    });
  });
});

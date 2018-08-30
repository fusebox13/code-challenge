import { expect } from "chai";
import { participants } from "@/code-challenge/registration";
import { CHALLENGE_ONE_TEST_CASES } from './testcases';

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

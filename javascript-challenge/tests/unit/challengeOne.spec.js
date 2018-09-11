import { expect } from "chai";
import { participants } from "@/code-challenge/registration";
import {
  CHALLENGE_ONE_TEST_CASES,
  CHALLENGE_TWO_TEST_CASES,
  CHALLENGE_THREE_TEST_CASES
} from "./testcases";

describe("Challenge One", () => {
  participants.forEach(participant => {
    context(participant.name + "'s solution", () => {
      it("Solved", () => {
        CHALLENGE_ONE_TEST_CASES.forEach(testCase => {
          expect(participant.solution1(testCase.input)).to.deep.equal(
            testCase.expectedOutput
          );
        });
      });
    });
  });
});

describe("Challenge Two", () => {
  participants.forEach(participant => {
    context(participant.name + "'s solution", () => {
      it("Solved", () => {
        CHALLENGE_TWO_TEST_CASES.forEach(testCase => {
          expect(
            participant.solution2(testCase.input[0], testCase.input[1])
          ).equal(testCase.expectedOutput);
        });
      });
    });
  });
});

describe.only("Challenge Three", () => {
  participants.forEach(participant => {
    context(participant.name + "'s solution", () => {
      it("Solved", () => {
        CHALLENGE_THREE_TEST_CASES.forEach(testCase => {
          expect(
            participant.solution3(testCase.input)
          ).equal(testCase.expectedOutput);
        });
      });
    });
  });
});

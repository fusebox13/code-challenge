package com.example.javachallenge;

import com.example.javachallenge.solutions.Solutions;
import org.assertj.core.api.Assertions;
import org.junit.Before;
import org.junit.Test;

public abstract class AbstractCodeChallengeTest {
    public Solutions solution;

    @Before
    public abstract void setUp();

    @Test
    public void challenge_two_test_case_1() {
        String[] set = {"FCS", "is", "totally", "awesome"};
        String[] subset = {"FCS", "is", "awesome"};
        Assertions.assertThat(solution.challengeTwo(set, subset)).isTrue();
    }

    @Test
    public void challenge_two_test_case_2() {
        String[] set = {"FCS", "is", "totally", "awesome"};
        String[] subset = {"fcs", "is", "awesome"};
        Assertions.assertThat(solution.challengeTwo(set, subset)).isFalse();
    }

    @Test
    public void challenge_two_test_case_3() {
        String[] set = {"FCS", "is", "totally", "awesome"};
        String[] subset = {"awesome", "fcs", "is"};
        Assertions.assertThat(solution.challengeTwo(set, subset)).isTrue();
    }
}

package com.example.javachallenge;

import com.example.javachallenge.solutions.Solutions;
import org.assertj.core.api.Assertions;
import org.junit.Before;
import org.junit.Test;

import java.util.HashMap;
import java.util.Map;

public abstract class AbstractCodeChallengeTest {
    public Solutions solution;

    Map<Integer, int[]> CHALLENGE_THREE_TEST_CASES = new HashMap<>();

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

    @Test
    public void challenge_three_test_case_1() {
        int[] set = {974, 507, 956, 763, 478, 909, 219, 371, 720, 368, 313, 637, 883, 792, 215, 226, 864, 627, 655, 768, 340, 809, 236, 986, 364, 29, 503};
        int expectedOutput = 8937;
        Assertions.assertThat(solution.challengeThree(set)).isEqualTo(expectedOutput);
    }

    @Test
    public void challenge_three_test_case_2() {
        int[] set = {844, 828, 282, 642, 380, 539, 421, 15, 119, 509, 68, 822, 81, 289, 665, 601, 588, 890, 187, 986, 39, 696, 450, 920, 684, 827, 853, 535, 652, 600, 242, 250, 530, 605, 290, 556, 480, 190, 55, 899, 114, 34, 602, 254, 565, 87, 317, 61, 699, 353, 266, 759, 647, 210, 670, 313, 783, 948, 998};
        int expectedOutput = 17762;
        Assertions.assertThat(solution.challengeThree(set)).isEqualTo(expectedOutput);
    }

    @Test
    public void challenge_three_test_case_3() {
        int[] set = {730, 642, 940, 52, 376, 77, 70, 164, 120, 305, 91, 379, 394, 831, 570, 909, 666, 862, 338, 118, 853, 603, 360, 556, 652, 471, 584, 856, 850, 31, 171, 574, 299, 167, 336, 492, 3, 704, 634, 728, 480, 937, 23, 177, 397, 169, 625, 952, 187, 618, 474, 335, 318, 465, 856, 175, 754, 2, 307, 464, 577, 953, 335, 433, 74, 947, 243, 519, 286, 739, 796, 882, 450, 0, 102, 915, 892, 339, 169, 434, 285, 143, 228, 341, 946, 817, 896};
        int expectedOutput = 25004;
        Assertions.assertThat(solution.challengeThree(set)).isEqualTo(expectedOutput);
    }

    @Test
    public void challenge_three_test_case_4() {
        int[] set = {198, 247, 291, 797, 783, 845, 400, 869, 483, 986, 480, 984, 239, 793, 527, 519, 395, 412, 333, 845, 974, 250, 991, 697, 394, 937, 577, 170, 668, 871, 115, 202, 650, 66, 693};
        int expectedOutput = 11738;
        Assertions.assertThat(solution.challengeThree(set)).isEqualTo(expectedOutput);
    }

    @Test
    public void challenge_three_test_case_5() {
        int[] set = {777, 384, 392, 286, 305, 8, 787, 227, 399, 79, 535, 115, 656, 991, 959, 345, 773, 698, 23, 263, 384, 956, 360, 900, 600, 598, 908, 427, 148, 799, 261, 311, 954, 909, 381, 362, 363, 321, 777, 733, 637, 345, 159, 514, 748, 959, 681, 485, 982, 310, 941, 649, 889, 460, 186, 614, 396, 579, 945, 296, 407, 186, 213, 860, 575, 241, 89, 659};
        int expectedOutput = 20764;
        Assertions.assertThat(solution.challengeThree(set)).isEqualTo(expectedOutput);
    }


    @Test
    public void challenge_three_test_case_6() {
        int[] set = {698, 509, 809, 163, 682, 61, 271, 67, 86, 478, 636, 701, 579, 836, 298, 507, 326, 253, 533, 330, 210, 900, 407, 143, 319, 996, 798, 668, 495, 849, 118, 411, 573, 628, 507, 310, 775, 523, 455, 865, 794, 162, 450, 901, 564, 434, 616, 777, 52, 972, 548, 807, 813, 203, 658, 112, 394, 203, 25, 981, 428, 769, 607};
        int expectedOutput = 18924;
        Assertions.assertThat(solution.challengeThree(set)).isEqualTo(expectedOutput);
    }

    @Test
    public void challenge_three_test_case_7() {
        int[] set = {375, 305, 807, 114, 963, 734, 302, 986, 309, 834, 300, 163, 389, 674, 717, 247, 699, 972, 87, 710, 579, 296, 318, 566, 679, 552, 858, 133, 484, 14, 866, 429, 468, 632, 338, 474, 170, 442, 328, 211, 69, 473, 21, 914, 355, 247, 502, 330, 703, 272, 386, 836, 286, 912, 750, 374, 155, 614, 92, 281, 778, 761, 867, 261};
        int expectedOutput = 18690;
        Assertions.assertThat(solution.challengeThree(set)).isEqualTo(expectedOutput);
    }

    @Test
    public void challenge_three_test_case_8() {
        int[] set = {102, 583, 899, 930, 995, 593, 894, 885, 563, 65, 167, 842, 687, 575, 180, 381, 181, 274, 509, 266, 159, 320, 850, 552, 186, 995, 92, 434, 41, 101, 751, 984, 422, 290, 752, 396, 589, 532, 513, 240, 77, 420, 534, 829, 276, 484, 667, 15, 662, 642, 404, 212, 969, 198, 608, 827, 591, 908};
        int expectedOutput = 16911;
        Assertions.assertThat(solution.challengeThree(set)).isEqualTo(expectedOutput);
    }

    @Test
    public void challenge_three_test_case_9() {
        int[] set = {745, 257, 637, 863, 622, 901, 592, 214};
        int expectedOutput = 2723;
        Assertions.assertThat(solution.challengeThree(set)).isEqualTo(expectedOutput);
    }

    @Test
    public void challenge_three_test_case_10() {
        int[] set = {716, 182, 967, 708, 435, 883, 850, 265, 347, 976, 826, 522, 183, 150, 910, 696, 714, 221, 523, 384, 506, 642, 482, 795, 925, 863, 681};
        int expectedOutput = 9207;
        Assertions.assertThat(solution.challengeThree(set)).isEqualTo(expectedOutput);
    }
}

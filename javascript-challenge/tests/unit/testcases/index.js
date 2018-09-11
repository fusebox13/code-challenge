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

export const CHALLENGE_THREE_TEST_CASES = [
  { 
    input: [749, 52, 934, 151, 296, 297, 766, 414, 658, 129, 833, 962, 636, 736, 196, 959, 704, 145, 800, 611, 3, 320, 834, 650, 977, 102, 38, 467, 485, 244, 289, 112, 804, 732, 138, 707, 885, 208, 179, 467, 655],
    expectedOutput: 12147
  },
  { 
    input: [842, 86, 343, 178, 78, 912, 932, 59, 721, 970, 969, 803, 961, 278, 334, 486, 450, 327, 43, 276, 652, 773, 507, 745, 860, 421, 872, 529, 153, 536, 489, 761, 726, 330, 773, 553, 215, 170, 754, 381, 649, 922, 783, 307, 643, 156, 970, 542, 59, 172, 431, 169, 230, 421, 901, 840, 744, 715, 326, 944, 692, 920, 52, 303, 352],
    expectedOutput: 19401
  },
  { 
    input: [707, 606, 569, 705, 414, 595, 950, 438, 345, 426, 507, 935, 944, 580, 461, 256, 827, 984, 269, 731, 624, 949, 946, 592, 779, 722, 703, 400, 611, 988, 255, 682, 604, 407, 216, 808, 740, 736, 427, 980, 956, 967],
    expectedOutput: 14843
  },
  { 
    input: [732, 230, 466, 940, 294, 342, 491, 363, 964, 662, 324, 735, 408, 913, 81, 663, 203, 932, 612, 940, 198, 348, 223, 282, 692, 224, 297, 284, 199, 36, 795, 464, 183, 734, 860, 68, 441, 129, 273, 660, 260, 108, 256, 554, 599, 767, 107, 736, 494, 185, 339, 892, 467, 784, 586, 329, 288, 486, 978, 814, 499, 436, 268, 133, 579, 862, 696, 498, 63, 34, 667, 541, 638, 542, 319, 559, 193, 782],
    expectedOutput: 22015
  },
  { 
    input: [469, 20, 311, 804, 604, 435, 571, 292, 721, 497, 561, 759, 931, 604, 928, 469, 808, 189, 232, 840, 936, 947, 461, 815, 586, 118, 929, 723, 674, 521, 844, 374, 187, 266, 42, 204, 830, 515, 874, 938, 663, 746, 983, 819, 273, 574, 301, 370, 694, 528, 9, 529, 836, 385, 525, 200, 319, 418, 143, 721, 231, 829, 644, 575, 14, 187, 614, 359, 120, 976, 496, 39, 743, 464, 682, 652, 307, 405, 38, 47, 666, 296, 797, 463, 41, 220, 790, 394],
    expectedOutput: 25659
  },
  { 
    input: [299, 252, 308, 666, 24, 435, 826, 481, 860, 31, 761, 381, 340, 498, 632, 101, 879, 392, 148, 892, 149, 775, 873, 353, 266, 256, 670, 443, 522, 469, 841, 183, 95, 542, 378, 40, 326, 524, 340, 529, 768, 889, 301, 610, 324, 666, 159, 268, 362, 403, 879, 859, 730, 61, 523, 111, 594, 302, 441, 935, 998, 965, 82, 851, 106, 120, 525, 779, 707, 396, 584, 90, 596, 992, 689, 121, 357, 471, 306],
    expectedOutput: 22730
  },
  { 
    input: [693, 584, 227, 433, 744, 115, 386, 71, 139, 179, 93, 975, 444, 994, 0, 782, 647, 790, 898, 657, 339, 870, 482, 767, 420],
    expectedOutput: 8064
  },
  { 
    input: [783, 775, 409, 811, 836, 312, 997, 403, 530, 635, 323, 190, 360, 751, 690, 666, 334, 625, 640, 881, 287, 149, 739, 803, 109, 709, 722, 702],
    expectedOutput: 9164
  },
  { 
    input: [933, 587, 980, 972, 817, 62, 898, 602, 636, 582, 616, 330, 934, 207, 113, 243, 304, 898, 329, 456, 711, 982, 374, 228, 227, 737, 356, 721, 611, 413, 113, 233, 383, 757, 362, 227, 2, 750, 104, 911, 466, 931, 795, 557, 692, 584, 249, 262, 937, 992, 362, 302, 663, 858, 619, 458, 101, 902],
    expectedOutput: 19216
  },
  { 
    input: [732, 592, 654, 50, 829, 819, 39, 476, 794, 46, 431, 418, 191, 821, 952, 40, 647, 347, 266, 345, 142, 196, 679, 259, 190, 980, 648, 31, 397, 255, 373, 803, 48, 742, 794, 494, 136, 11, 821, 504, 795, 9, 427, 571, 534, 458, 26, 10, 606, 782, 97, 629, 22, 237, 772, 886, 418, 90, 932, 307, 306, 45, 267, 176, 610, 739, 605, 848, 454, 611, 698, 616, 403, 591, 104, 480, 777, 589, 69, 311, 748, 266, 50, 906, 146, 274, 523, 272, 327, 790, 26, 277, 955, 594, 884, 113, 733, 329],
    expectedOutput: 26569
  },
  { 
    input: [557, 18, 296, 915, 913, 350, 829, 664, 764, 514, 162, 340, 137, 526, 937, 143, 251, 222, 525, 271, 325, 592, 50, 263, 617, 278, 35, 147, 90, 983, 454, 609, 807, 960, 550, 379, 39, 999, 941, 481, 412, 600, 708],
    expectedOutput: 11887
  },
  { 
    input: [222, 368, 320, 461, 597, 143, 523, 340],
    expectedOutput: 1662
  },
  { 
    input: [827, 668, 653, 905, 39, 707, 44, 127, 154, 429, 841, 93, 580, 673, 303, 822, 691, 989, 790, 987, 980, 216, 32, 392, 318, 332, 641, 378, 560, 567, 471, 8, 658],
    expectedOutput: 9843
  },
  { 
    input: [649, 451, 72, 111, 892, 300, 899, 3, 832, 464, 570, 596, 770, 242, 663, 864, 379, 221, 964, 217, 525, 484, 691, 200, 637, 17, 213, 310, 739, 382, 170, 471, 991, 451, 847, 931, 175, 404, 166, 234, 355, 518, 791, 812, 521, 71, 756, 962, 883, 559, 419, 28, 598, 222, 108, 344, 598, 404, 370, 883, 198, 7, 471, 632, 835, 380, 407],
    expectedOutput: 19658
  },
  { 
    input: [688, 557, 223, 840, 516, 427, 294, 516, 311, 896, 361, 375, 836, 140, 917, 893, 688, 987, 317, 816, 89, 631, 132, 820, 929, 230, 268, 398, 786, 906, 229, 746, 555, 241, 793, 175, 281, 290, 772, 809, 249, 59, 25, 467, 209, 809, 407, 759, 254, 956, 746, 644, 824, 430, 718, 275, 306, 441, 927, 206, 854, 738, 939, 148, 69, 406, 833, 461, 708, 887, 267, 759, 354, 83, 167, 731, 358, 249, 308],
    expectedOutput: 23978
  },
  { 
    input: [69, 848, 311, 145, 225, 390, 100, 860, 717, 850, 178, 34, 212, 399, 935, 791, 938, 542, 123, 461, 979, 399, 593, 633, 743, 907, 896, 154, 391, 864, 120, 849, 529, 730, 487, 25, 254, 291, 211, 205, 901, 271, 426, 128, 393, 238, 749, 885, 5, 334, 331, 755, 616, 637, 306, 476, 923, 728, 736, 739, 600, 899, 583, 480, 348, 910, 399, 274, 541, 272, 718, 936, 239, 482, 834, 131, 407, 250, 87, 259, 787, 418, 412, 708, 849, 725, 104, 724, 587, 230, 162],
    expectedOutput: 25983
  },
  { 
    input: [76, 413, 998, 585, 933, 367, 115, 23, 136, 305, 209, 41, 814, 128, 472, 943, 76, 952, 315, 988, 127, 766, 484, 730, 632, 108, 185, 405],
    expectedOutput: 8173
  },
  { 
    input: [722, 940, 169, 969, 163, 616, 352],
    expectedOutput: 2525
  },
  { 
    input: [259, 199, 660, 853, 370, 0, 5, 431, 613, 942, 824, 738, 714, 436, 677, 318, 942, 509, 947, 291, 950, 440, 266, 6, 830, 968, 500, 586, 728, 321, 49, 379, 724, 454],
    expectedOutput: 10118
  },
  { 
    input: [535, 64, 408, 968, 589, 525, 961, 739, 895, 743, 407, 154, 691, 926, 924, 746, 396, 213, 665, 415, 825, 527, 579, 474, 603, 25, 494, 495, 242, 191, 885, 111, 609, 671, 124, 846, 229, 708, 181, 242, 509, 512, 470, 942, 267, 458, 780, 787, 41, 431, 673, 666, 327, 936, 808, 496, 289, 304, 457, 502, 324],
    expectedOutput: 18600
  }
]
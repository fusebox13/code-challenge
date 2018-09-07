package com.example.javachallenge;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

public class JavaChallengeApplicationTests {

	@Test
	public void maxSubsetSum_returns_max_sum_for_subset() {
		int[] arr = { 1, 3, 4, 6, 7 };
		int max = maxSubsetSum(arr);

		System.out.println(max);

	}


	public static int maxSubsetSum(int[] arr) {
		arr[0] = Math.max(0, arr[0]);
		arr[1] = Math.max(arr[0], arr[1]);
		for (int i = 2; i < arr.length; i++)
			arr[i] = Math.max(arr[i-1], arr[i]+arr[i-2]);
		return arr[arr.length-1];
	}
}

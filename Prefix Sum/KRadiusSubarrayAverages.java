import java.util.Arrays;

/*You are given a 0-indexed array nums of n integers, and an integer k.
The k-radius average for a subarray of nums centered at some index i with the radius k is the average of all elements in nums between the indices i - k and i + k (inclusive). If there are less than k elements before or after the index i, then the k-radius average is -1.

Build and return an array avgs of length n where avgs[i] is the k-radius average for the subarray centered at index i.
The average of x elements is the sum of the x elements divided by x, using integer division. The integer division truncates toward zero, which means losing its fractional part.*/

class KRadiusSubarrayAverages {
    public int[] getAverages(int[] nums, int k) {
        int n = nums.length;

        if (k == 0) {
            return nums;
        }

        int[] averages = new int[n];
        Arrays.fill(averages, -1);

        int windowSize = k * 2 + 1;

        if (windowSize > n) {
            return averages;
        }

        long[] prefix = new long[n + 1];
        for (int i = 0; i < n; i++) {
            prefix[i + 1] = prefix[i] + nums[i];
        }


        for (int i = k; i < (n - k); i++) {
            int leftBound = i - k, rightBound = i + k;
            long windowSum = prefix[rightBound + 1] - prefix[leftBound];
            averages[i] = (int) (windowSum / windowSize);
        }

        return averages;
    }
}
public class SortedSquares {
    public int[] sortedSquares(int[] nums) {
        int[] squaredArray = new int[nums.length];

        int left = 0;
        int right = nums.length - 1;

        for (int i = nums.length - 1; i >= 0; i--) {
            int leftSquare = nums[left] * nums[left];
            int rightSquare = nums[right] * nums[right];
            if (leftSquare > rightSquare) {
                squaredArray[i] = leftSquare;
                left++;
            } else {
                squaredArray[i] = rightSquare;
                right--;
            }
        }
        
        return squaredArray;
    }
}

// Time Complexity: O(n) - We traverse the input array once.
// Space Complexity: O(n) - We create a new array to store the squared values.
/*Given an integer array nums sorted in non-decreasing order, 
return an array of the squares of each number sorted in non-decreasing order. */

public class SquaresOfSortedArray {
    public int[] sortedSquares(int[] nums) {
        int[] squaredArray = new int[nums.length];

        int left = 0;
        int right = nums.length - 1;

        for (int i = nums.length - 1; i >= 0; i--) {
            if (Math.abs(nums[left]) > Math.abs(nums[right])) {
                squaredArray[i] = nums[left] * nums[left];
                left++;
            } else {
                squaredArray[i] = nums[right] * nums[right];
                right--;
            }
        }
        
        return squaredArray;
    }
}

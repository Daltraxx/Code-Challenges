public class NumArray {
  int[] prefixSumArr;

  public NumArray(int[] nums) {
    this.prefixSumArr = new int[nums.length];
    int sum = 0;
    for (int i = 0; i < prefixSumArr.length; i++) {
      sum += nums[i];
      prefixSumArr[i] = sum;
    }
  }

  public int sumRange(int left, int right) {
    int leftSum = left > 0 ? prefixSumArr[left - 1] : 0;
    return prefixSumArr[right] - leftSum;
  }
}

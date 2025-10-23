import java.util.HashMap;
import java.util.Map;

public class Rob {
  int[] houses;
  Map<Integer, Integer> memo;

  public int rob(int[] nums) {
    houses = nums;
    memo = new HashMap<>();
    return maxMoney(nums.length - 1);
  }

  private int maxMoney(int i) {
    if (i == 0)
      return houses[0];
    if (i == 1)
      return Math.max(houses[0], houses[1]);

    if (memo.containsKey(i))
      return memo.get(i);

    memo.put(i, Math.max(maxMoney(i - 2) + houses[i], maxMoney(i - 1)));

    return memo.get(i);
  }
  // Time O(n)
  // Space O(n)

  // Bottom up approach
  public int robBottomUp(int[] nums) {
    if (nums.length == 1)
      return nums[0];

    int[] maxMoney = new int[nums.length];

    maxMoney[0] = nums[0];
    maxMoney[1] = Math.max(nums[0], nums[1]);

    for (int i = 2; i < maxMoney.length; i++) {
      maxMoney[i] = Math.max(maxMoney[i - 2] + nums[i], maxMoney[i - 1]);
    }

    return maxMoney[maxMoney.length - 1];
  }
  // Time O(n)
  // Space O(n)

  //Bottom up with constant space
  public int robBottomUpConstantSpace(int[] nums) {
    if (nums.length == 1)
      return nums[0];

    int backTwo = nums[0];
    int backOne = Math.max(nums[0], nums[1]);
    int currentHouse = backOne;

    for (int i = 2; i < nums.length; i++) {
      currentHouse = Math.max(backTwo + nums[i], backOne);
      backTwo = backOne;
      backOne = currentHouse;
    }

    return currentHouse;
  }
  // Time O(n)
  // Space O(1)

  
  public static void main(String[] args) {
    Rob robber = new Rob();
    int[] houses = {2,7,9,3,1};
    System.out.println(robber.rob(houses)); // Output: 12
    System.out.println(robber.robBottomUp(houses)); // Output: 12
    System.out.println(robber.robBottomUpConstantSpace(houses)); // Output: 12
  }
}
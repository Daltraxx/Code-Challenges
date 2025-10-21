import java.util.ArrayList;
import java.util.List;

public class CombinationSum3 {
  int target;
  int combinationLength;
  List<List<Integer>> combinations;
  int largestPossibleNum;

  public List<List<Integer>> combinationSum3(int k, int n) {
    combinationLength = k;
    target = n;
    combinations = new ArrayList<>();
    largestPossibleNum = n < 10 ? n : 9;
    backtrack(new ArrayList<>(), 0, 1);
    return combinations;
  }
  
  private void backtrack(List<Integer> currCombo, int currSum, int i) {
    if (currCombo.size() == combinationLength) {
      if (currSum == target)
        combinations.add(new ArrayList<>(currCombo));
      return;
    }

    for (int j = i; j <= largestPossibleNum; j++) {
      int newSum = currSum + j;
      if (newSum <= target) {
        currCombo.add(j);
        backtrack(currCombo, newSum, j + 1);
        currCombo.remove(currCombo.size() - 1);
      } else {
        return;
      }
    }
  }

  public static void main(String[] args) {
    CombinationSum3 cs3 = new CombinationSum3();
    System.out.println(cs3.combinationSum3(3, 7)); // [[1,2,4]]
    System.out.println(cs3.combinationSum3(9, 45)); // [[1,2,3,4,5,6,7,8,9]]
  }
}

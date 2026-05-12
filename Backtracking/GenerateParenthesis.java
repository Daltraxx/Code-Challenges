import java.util.ArrayList;
import java.util.List;

public class GenerateParenthesis {
  int n;
  int stringLength;
  List<String> combinations;

  public List<String> generateParenthesis(int n) {
    this.n = n;
    stringLength = 2 * n;
    combinations = new ArrayList<>();
    backtrack(new StringBuilder("("), 1, 0);
    return combinations;
  }

  private void backtrack(StringBuilder curr, int leftCount, int rightCount) {
    if (leftCount == n && rightCount == n) {
      combinations.add(curr.toString());
      return;
    }

    if (leftCount < n) {
      curr.append('(');
      backtrack(curr, leftCount + 1, rightCount);
      curr.deleteCharAt(curr.length() - 1);
    }
    if (rightCount < leftCount) {
      curr.append(')');
      backtrack(curr, leftCount, rightCount + 1);
      curr.deleteCharAt(curr.length() - 1);
    }
  }
}

// Time complexity: Can be approximated as O(2^n)
// because we are generating all valid combinations of parentheses,
// and all possible combinations of parentheses can be represented as a binary
// tree with 2^n nodes.
// Space complexity: O(n) because at most we will have n opening parentheses in
// the current combination,
// which takes O(n) space.

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
    if (curr.length() == stringLength) {
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
      backtrack(curr.append(')'), leftCount, rightCount + 1);
      curr.deleteCharAt(curr.length() - 1);
    }
  }
}

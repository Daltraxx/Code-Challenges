package BinaryTrees;

public class LongestZigZag {
  private int maxLength;

  public int longestZigZag(TreeNode root) {
    maxLength = 0;
    dfs(root, 0, 0);
    return maxLength;
  }

  private void dfs(TreeNode node, int left, int right) {
    if (node == null) {
      return;
    }

    maxLength = Math.max(Math.max(left, right), maxLength);
    dfs(node.left, right + 1, 0);
    dfs(node.right, 0, left + 1);
  }
}

// Time Complexity: O(n) where n is the number of nodes in the tree
// Space Complexity: O(h) where h is the height of the tree, due to the
// recursive call stack. In the worst case of a skewed tree, this can be O(n).
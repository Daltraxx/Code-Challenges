package BinarySearchTrees;

/*Given the root of a Binary Search Tree (BST), 
return the minimum absolute difference between the values of any two different nodes in the tree. */

public class GetMinimumDifference {
    private Integer prevVal;
    private int minDifference;

    public int getMinimumDifference(TreeNode root) {
        prevVal = null;
        minDifference = Integer.MAX_VALUE;
        dfs(root);
        return minDifference;
    }

    public void dfs(TreeNode node) {
        if (node == null) {
            return;
        }

        dfs(node.left);

        if (prevVal != null)
            minDifference = Math.min(node.val - prevVal, minDifference);
        prevVal = node.val;

        dfs(node.right);
    }
}

// Time Complexity: O(n) where n is the number of nodes in the tree, as we visit
// each node once.
// Space Complexity: O(h) where h is the height of the tree, which in the
// worst case (a skewed tree) is O(n) and in the best case (a balanced tree) is
// O(log n).
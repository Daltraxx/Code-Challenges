package BinarySearchTrees;

import java.util.ArrayDeque;
import java.util.Deque;

/*Given the root node of a binary search tree and two integers low and high, 
return the sum of values of all nodes with a value in the inclusive range [low, high]. */

public class RangeSumBST {
    public int rangeSumBST(TreeNode root, int low, int high) {
        if (root == null) {
            return 0;
        }

        int sum = 0;

        if (root.val >= low && root.val <= high) {
            sum += root.val;
        }

        if (root.val > low) {
            sum += rangeSumBST(root.left, low, high);
        }

        if (root.val < high) {
            sum += rangeSumBST(root.right, low, high);
        }

        return sum;
    }

    // ITERATIVE SOLUTION
    public int rangeSumBSTIterative(TreeNode root, int low, int high) {
        int sum = 0;

        if (root == null) {
            return sum;
        }

        Deque<TreeNode> stack = new ArrayDeque<>();
        stack.addLast(root);

        while (!stack.isEmpty()) {
            TreeNode node = stack.removeLast();
            if (node.val >= low && node.val <= high) {
                sum += node.val;
            }

            if (node.val > low && node.left != null)
                stack.addLast(node.left);
            if (node.val < high && node.right != null)
                stack.addLast(node.right);
        }

        return sum;
    }
}

// Time Complexity: O(n) where n is the number of nodes in the tree. In the
// worst case (a skewed tree or all nodes within the range), we may have to
// visit all nodes in the tree.
// Space Complexity: O(h) where h is the height of the tree, which in the worst
// case (a skewed tree) is O(n) and in the best case (a balanced tree) is O(log
// n).

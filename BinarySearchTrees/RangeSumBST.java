package BinarySearchTrees;

import java.util.Stack;

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

    //iterative solution below
    public int rangeSumBSTIterative(TreeNode root, int low, int high) {
        int sum = 0;

        if (root == null) {
            return sum;
        }

        Stack<TreeNode> stack = new Stack<>();
        stack.push(root);

        while (!stack.isEmpty()) {
            TreeNode node = stack.pop();
            if (node.val >= low && node.val <= high) {
                sum += node.val;
            }

            if (node.val > low && node.left != null) stack.push(node.left);
            if (node.val < high && node.right != null) stack.push(node.right);
        }

        return sum;
    }

}

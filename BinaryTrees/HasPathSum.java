package BinaryTrees;

import java.util.Stack;

/*Given the root of a binary tree and an integer targetSum, 
return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children. */

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 * int val;
 * TreeNode left;
 * TreeNode right;
 * TreeNode() {}
 * TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) {
 * this.val = val;
 * this.left = left;
 * this.right = right;
 * }
 * }
 */

public class HasPathSum {
    public boolean hasPathSumRecursive(TreeNode root, int targetSum) {
        if (root == null) {
            return false;
        }

        targetSum -= root.val;

        if (root.left == null && root.right == null) {
            return targetSum == 0;
        }

        return hasPathSumRecursive(root.left, targetSum) || hasPathSumRecursive(root.right, targetSum);
    }

    public boolean hasPathSumIterative(TreeNode root, int targetSum) {
        if (root == null) {
            return false;
        }

        Stack<Pair> stack = new Stack<>();
        stack.push(new Pair(root, 0));

        while (!stack.isEmpty()) {
            Pair pair = stack.pop();
            TreeNode currentNode = pair.node;
            int currentSum = pair.previousSum + currentNode.val;

            if (currentNode.left == null && currentNode.right == null) {
                if (currentSum == targetSum)
                    return true;
            }

            if (currentNode.left != null)
                stack.push(new Pair(currentNode.left, currentSum));
            if (currentNode.right != null)
                stack.push(new Pair(currentNode.right, currentSum));

        }

        return false;
    }

    // Helper class to store node and sum of path up to that node for iterative
    // solution
    private class Pair {
        TreeNode node;
        int previousSum;

        public Pair(TreeNode node, int previousSum) {
            this.node = node;
            this.previousSum = previousSum;
        }
    }
}

// Time Complexity: O(n) where n is the number of nodes in the tree, as we may
// have to visit each node once.
// Space Complexity: O(n) in the worst case of a completely unbalanced tree, and
// O(log n) in the best case of a balanced tree, due to the stack space used for
// recursion or iteration.

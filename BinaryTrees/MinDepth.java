package BinaryTrees;

import java.util.Stack;

/*Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path 
from the root node down to the nearest leaf node.*/

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
class MinDepth {
    // RECURSIVE DFS SOLUTION
    public int minDepth(TreeNode root) {
        // If tree/subtree is empty, min depth is 0
        if (root == null) {
            return 0;
        }

        // If at least one child is null, return the min depth of the other plus the
        // current node
        // This is because if one child is null, the path to the leaf must go through
        // the other child
        // If we were to take the min of both children when one is null, we would
        // incorrectly return 1 instead of the actual depth of the non-null child
        if (root.left == null) {
            return minDepth(root.right) + 1;
        } else if (root.right == null) {
            return minDepth(root.left) + 1;
        }

        // If neither child is null, return the smaller minDepth of the two plus the
        // current node
        return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
    }

    // ITERATIVE DFS SOLUTION
    public int minDepthIterative(TreeNode root) {
        if (root == null)
            return 0;

        Stack<nodeAndDepth> stack = new Stack<>();
        stack.push(new nodeAndDepth(root, 1));

        int minDepthFound = Integer.MAX_VALUE;

        while (!stack.isEmpty()) {
            nodeAndDepth nodeAndDepth = stack.pop();
            TreeNode currentNode = nodeAndDepth.node;
            int currentDepth = nodeAndDepth.depth;

            // If node is leaf, offer possible min depth answer
            if (currentNode.left == null && currentNode.right == null) {
                minDepthFound = Math.min(minDepthFound, currentDepth);
            }

            // Update depth for next round and push existing children to stack
            currentDepth++;
            if (currentNode.left != null)
                stack.push(new nodeAndDepth(currentNode.left, currentDepth));
            if (currentNode.right != null)
                stack.push(new nodeAndDepth(currentNode.right, currentDepth));
        }

        return minDepthFound;
    }

    private static class nodeAndDepth {
        TreeNode node;
        int depth;

        public nodeAndDepth(TreeNode node, int depth) {
            this.node = node;
            this.depth = depth;
        }
    }
}

// Time complexity: O(n)
// Space complexity: O(h) where h is the height of the tree, which is O(n) in
// the worst case of a skewed tree and O(log n) in the best case of a balanced
// tree.
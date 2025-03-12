package BinaryTrees;

import java.util.Stack;

/*Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node. */

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

 class MaxDepthOfBinaryTree {
    public int maxDepthRecursive(TreeNode root) {
        if (root == null) {
            return 0;
        }

        int leftDepth = maxDepthRecursive(root.left);
        int rightDepth = maxDepthRecursive(root.right);

        return Math.max(leftDepth, rightDepth) + 1;
    }

    public int maxDepthIterative(TreeNode root) {
        if (root == null) {
            return 0;
        }

        Stack<nodeDepthPair> stack = new Stack<>();
        stack.push(new nodeDepthPair(root, 1));
        int ans = 0;

        while (!stack.isEmpty()) {
            nodeDepthPair nodeDepthPair = stack.pop();
            TreeNode node = nodeDepthPair.node;
            int depth = nodeDepthPair.depth;
            ans = Math.max(ans, depth);

            if (node.left != null) {
                stack.push(new nodeDepthPair(node.left, depth + 1));
            }

            if (node.right != null) {
                stack.push(new nodeDepthPair(node.right, depth + 1));
            }
        }

        return ans;
    }
 }

 //for iterative solution, used for values stored in stack
 class nodeDepthPair {
    TreeNode node;
    int depth;
    nodeDepthPair(TreeNode node, int depth) {
        this.node = node;
        this.depth = depth;
    }
 }
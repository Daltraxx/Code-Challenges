package BinaryTrees;

import java.util.Stack;

/*Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value. */

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

public class IsSameTree {
    // RECURSIVE SOLUTION
    public boolean isSameTree(TreeNode p, TreeNode q) {
        // If both null, path to that point is identical
        if (p == null && q == null) {
            return true;
        }

        // Combined with previous check, if only one of nodes are null then not identical
        if (p == null || q == null) {
            return false;
        }

        // Values must match
        if (p.val != q.val) {
            return false;
        }

        // Both left and right paths must be identical
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }

    // ITERATIVE SOLUTION
    public boolean isSameTreeIterative(TreeNode p, TreeNode q) {
        Stack<NodePair> stack = new Stack<>();
        stack.push(new NodePair(p, q));

        while (!stack.isEmpty()) {
            NodePair nodePair = stack.pop();
            TreeNode nodeA = nodePair.nodeA;
            TreeNode nodeB = nodePair.nodeB;

            if (nodeA == null && nodeB == null) {
                continue;
            }

            if (nodeA == null || nodeB == null) {
                return false;
            }

            if (nodeA.val != nodeB.val) {
                return false;
            }

            stack.push(new NodePair(nodeA.left, nodeB.left));
            stack.push(new NodePair(nodeA.right, nodeB.right));
        }

        return true;
    }

    private static class NodePair {
        TreeNode nodeA;
        TreeNode nodeB;

        NodePair(TreeNode nodeA, TreeNode nodeB) {
            this.nodeA = nodeA;
            this.nodeB = nodeB;
        }
    }
}

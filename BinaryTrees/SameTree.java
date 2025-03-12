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

public class SameTree {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        //if both null, path to that point is identical
        if (p == null && q == null) {
            return true;
        }

        //combined with previous check, if only one of nodes are null then not identical
        if (p == null || q == null) {
            return false;
        }
        
        //values must match
        if (p.val != q.val) {
            return false;
        }

        //both left and right paths must be identical
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }

    public boolean isSameTreeIterative(TreeNode p, TreeNode q) {
        Stack<nodePair> stack = new Stack<>();
        stack.push(new nodePair(p, q));

        while (!stack.isEmpty()) {
            nodePair nodenodePair = stack.pop();
            TreeNode nodeA = nodenodePair.nodeA;
            TreeNode nodeB = nodenodePair.nodeB;

            if (nodeA == null && nodeB == null) {
                continue;
            }

            if (nodeA == null || nodeB == null) {
                return false;
            }

            if (nodeA.val != nodeB.val) {
                return false;
            }

            stack.push(new nodePair(nodeA.left, nodeB.left));
            stack.push(new nodePair(nodeA.right, nodeB.right));
        }

        return true;
    }
}

class nodePair { 
    TreeNode nodeA;
    TreeNode nodeB;
    nodePair(TreeNode nodeA, TreeNode nodeB) {
        this.nodeA = nodeA;
        this.nodeB = nodeB;
    }
}

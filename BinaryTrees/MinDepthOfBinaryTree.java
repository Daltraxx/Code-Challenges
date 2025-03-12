package BinaryTrees;
import java.util.Stack;

/*Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path 
from the root node down to the nearest leaf node.*/

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
class MinDepthOfBinaryTree {
    public int minDepth(TreeNode root) {
        //if tree/subtree is empty, min depth is 0
        if (root == null) {
            return 0;
        }

        //if at least one child is null, return the min depth of the other plus the current node
        if (root.left == null) {
            return minDepth(root.right) + 1;
        } else if (root.right == null) {
            return minDepth(root.left) + 1;
        }

        //if neither child is null, return the smaller minDepth of the two plus the current node
        return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
    }

    public int minDepthRecursive(TreeNode root) {
        if (root == null) return 0;

        Stack<nodeAndDepth> stack = new Stack<>();
        stack.push(new nodeAndDepth(root, 1));

        int minDepthFound = Integer.MAX_VALUE;

        while (!stack.isEmpty()) {
            nodeAndDepth nodeAndDepth = stack.pop();
            TreeNode currentNode = nodeAndDepth.node;
            int currentDepth = nodeAndDepth.depth;

            //if node is leaf, offer possible min depth answer
            if (currentNode.left == null && currentNode.right == null) {
                minDepthFound = Math.min(minDepthFound, currentDepth);
            }

            //update depth for next round and push existing children to stack
            currentDepth++;
            if (currentNode.left != null) stack.push(new nodeAndDepth(currentNode.left, currentDepth));
            if (currentNode.right != null) stack.push(new nodeAndDepth(currentNode.right, currentDepth));
        }

        return minDepthFound;
    }
}

class nodeAndDepth { 
    TreeNode node;
    int depth;
    nodeAndDepth(TreeNode node, int depth) {
        this.node = node;
        this.depth = depth;
    }
}
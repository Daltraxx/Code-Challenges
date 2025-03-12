package BinaryTrees;

import java.util.Stack;

/*Given the root of a binary tree and an integer targetSum, 
return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children. */

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

public class PathSum {
    public boolean hasPathSumRecursive(TreeNode root, int targetSum) {
        //return false if tree/subtree is empty
        if (root == null) {
            return false;
        }

        //subtract node's value from target sum
        targetSum -= root.val;

        //if node is leaf, see if targetSum now equals 0 (the sum of path would equal target)
        if (root.left == null && root.right == null) {
            return targetSum == 0;
        }

        //return true if left or right contains path to equaling target
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

            //if current node is leaf, return true if sum equals target
            if (currentNode.left == null && currentNode.right == null) {
                if (currentSum == targetSum) return true;
            }
            
            //push non-null children to stack to keep evaluating path
            if (currentNode.left != null) stack.push(new Pair(currentNode.left, currentSum));
            if (currentNode.right != null) stack.push(new Pair(currentNode.right, currentSum));
            
        }

        //if stack empties and no valid path is found, return false
        return false;
    }
}

class Pair { 
    TreeNode node;
    int previousSum;
    Pair(TreeNode node, int previousSum) {
        this.node = node;
        this.previousSum = previousSum;
    }
}

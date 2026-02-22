package BinaryTrees;

import java.util.Stack;

/*Given a binary tree root, 
a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

Return the number of good nodes in the binary tree. */

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

class GoodNodes {
    // Recursive approach
    public int goodNodes(TreeNode root) {
        return dfs(root, Integer.MIN_VALUE);
    }

    private int dfs(TreeNode node, int maxSoFar) {
        if (node == null) {
            return 0;
        }

        int left = dfs(node.left, Math.max(maxSoFar, node.val));
        int right = dfs(node.right, Math.max(maxSoFar, node.val));

        int goodNodesCount = left + right;

        if (node.val >= maxSoFar)
            goodNodesCount++;

        return goodNodesCount;
    }

    // Iterative approach
    public int goodNodesIterative(TreeNode root) {
        int goodNodesCount = 0;

        Stack<nodeAndMaxSoFar> stack = new Stack<>();
        stack.push(new nodeAndMaxSoFar(root, Integer.MIN_VALUE));

        while (!stack.isEmpty()) {
            nodeAndMaxSoFar nodeAndMaxSoFar = stack.pop();
            TreeNode currentNode = nodeAndMaxSoFar.node;
            int maxSoFar = nodeAndMaxSoFar.maxSoFar;

            // Add to goodNodesCount if current node is good node
            if (currentNode.val >= maxSoFar)
                goodNodesCount++;

            // Update maxSoFar
            maxSoFar = Math.max(maxSoFar, currentNode.val);

            // Add children to stack with updated maxSoFar value to continue evaluating
            if (currentNode.left != null)
                stack.push(new nodeAndMaxSoFar(currentNode.left, maxSoFar));
            if (currentNode.right != null)
                stack.push(new nodeAndMaxSoFar(currentNode.right, maxSoFar));
        }

        return goodNodesCount;
    }

    private class nodeAndMaxSoFar {
        TreeNode node;
        int maxSoFar;

        nodeAndMaxSoFar(TreeNode node, int maxSoFar) {
            this.node = node;
            this.maxSoFar = maxSoFar;
        }
    }
}

// Time: O(n) where n is number of nodes in tree, we have to visit each node once
// Space: O(n) in worst case of skewed tree, O(log n) in best case of balanced tree due to recursive call stack or iterative stack size. Or just O(h) where h is height of tree
package BinaryTrees;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.Stack;

/*Given the root of a binary tree, 
return an array of the largest value in each row of the tree (0-indexed). */

class LargestValueInEachRow {
    public List<Integer> largestValuesBFS(TreeNode root) {
        List<Integer> largestRowValues = new ArrayList<>();

        if (root == null) {
            return largestRowValues;
        }

        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);

        while (!queue.isEmpty()) {
            int size = queue.size();
            int maxRowValue = Integer.MIN_VALUE;

            for (int i = 0; i < size; i++) {
                TreeNode currentNode = queue.remove();
                maxRowValue = Math.max(maxRowValue, currentNode.val);

                if (currentNode.left != null) queue.add(currentNode.left);
                if (currentNode.right != null) queue.add(currentNode.right);
            }

            largestRowValues.add(maxRowValue);
        }

        return largestRowValues;
    }

    /*DFS solutions below */
    List<Integer> dfsLargestRowValues = new ArrayList<>();

    public List<Integer> largestValuesDFS(TreeNode root) {
        dfs(root, 0);
        return dfsLargestRowValues;
    }

    public void dfs(TreeNode node, int depth) {
        if (node == null) {
            return;
        }

        if (depth == dfsLargestRowValues.size()) {
            dfsLargestRowValues.add(node.val);
        } else {
            dfsLargestRowValues.set(depth, Math.max(dfsLargestRowValues.get(depth), node.val));
        }

        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    }

    public List<Integer> largestValuesDFSIterative(TreeNode root) {
        List<Integer> largestRowValues = new ArrayList<>();

        if (root == null) {
            return largestRowValues;
        }

        Stack<nodeAndDepthPair> stack = new Stack<>();
        stack.add(new nodeAndDepthPair(root, 0));

        while (!stack.isEmpty()) {
            nodeAndDepthPair nodeAndDepth = stack.pop();
            TreeNode currentNode = nodeAndDepth.node;
            int currentDepth = nodeAndDepth.depth;

            if (currentDepth == largestRowValues.size()) {
                largestRowValues.add(currentDepth, currentNode.val);
            } else {
                largestRowValues.set(currentDepth, Math.max(largestRowValues.get(currentDepth), currentNode.val));
            }

            if (currentNode.left != null) stack.push(new nodeAndDepthPair(currentNode.left, currentDepth + 1));
            if (currentNode.right != null) stack.push(new nodeAndDepthPair(currentNode.right, currentDepth + 1));
        }

        return largestRowValues;
    }

}

 //for DFS iterative solution, used for values stored in stack
 class nodeAndDepthPair {
    TreeNode node;
    int depth;
    nodeAndDepthPair(TreeNode node, int depth) {
        this.node = node;
        this.depth = depth;
    }
 }
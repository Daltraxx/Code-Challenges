package BinaryTrees;

/*Given the root of a binary tree, 
find the maximum value v for which there exist different nodes a and b 
where v = |a.val - b.val| and a is an ancestor of b.

A node a is an ancestor of b if either: any child of a is equal to b or any child of a is an ancestor of b.

- The number of nodes in the tree is in the range [2, 5000].
- node.val is a positive number*/

public class MaxDifferenceBetweenNodeAndAncestor {
    public int maxAncestorDiff(TreeNode root) {
        return dfs(root, root.val, root.val);
    }

    public int dfs(TreeNode node, int minVal, int maxVal) {
        //if reach end of path, return max difference for that path
        if (node == null) {
            return maxVal - minVal;
        }

        //update min and max values so far
        minVal = Math.min(minVal, node.val);
        maxVal = Math.max(maxVal, node.val);

        //get max difference of left and right paths
        //and return the larger value
        int left = dfs(node.left, minVal, maxVal);
        int right = dfs(node.right, minVal, maxVal);

        return Math.max(left, right);
    }
}

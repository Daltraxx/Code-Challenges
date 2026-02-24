package BinaryTrees;

/*Given the root of a binary tree, 
find the maximum value v for which there exist different nodes a and b 
where v = |a.val - b.val| and a is an ancestor of b.

A node a is an ancestor of b if either: any child of a is equal to b or any child of a is an ancestor of b.

- The number of nodes in the tree is in the range [2, 5000].
- node.val is a positive number*/

public class MaxAncestorDiff {
    public int maxAncestorDiff(TreeNode root) {
        return dfs(root, root.val, root.val);
    }

    public int dfs(TreeNode node, int minVal, int maxVal) {
        // If reach end of path, return max difference for that path
        if (node == null) {
            return maxVal - minVal;
        }

        // Update min and max values so far
        minVal = Math.min(minVal, node.val);
        maxVal = Math.max(maxVal, node.val);

        // Get max difference of left and right paths
        // and return the larger value
        int left = dfs(node.left, minVal, maxVal);
        int right = dfs(node.right, minVal, maxVal);

        return Math.max(left, right);
    }
}

// Time Complexity: O(n) where n is the number of nodes in the tree. We visit
// each node once.
// Space Complexity: O(h) where h is the height of the tree. In the worst case
// of a skewed tree, the height can be n, so O(n) in the worst case. In a
// balanced tree, the height is log(n), so O(log(n)).

/*Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. 
This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them. */

const diameterOfBinaryTree = (root) => {
    let maxDiameter = 0;

    const dfs = (node) => {
        if (!node) {
            return 0;
        }

        // Get longest path running through left and right children
        const leftLongestPath = dfs(node.left);
        const rightLongestPath = dfs(node.right);

        // Offer diameter of current tree/subtree as possible solution
        maxDiameter = Math.max(maxDiameter, leftLongestPath + rightLongestPath);

        // Return longest path to call from parent node iteration
        return Math.max(leftLongestPath, rightLongestPath) + 1;
    }
    
    dfs(root);
    return maxDiameter;
}

// Time Complexity: O(n) where n is the number of nodes in the tree, as we visit each node once.
// Space Complexity: O(h) where h is the height of the tree, due to the recursive call stack. 
// In the worst case of a skewed tree, the height could be O(n), leading to O(n) space complexity. 
// In the best case of a balanced tree, the height would be O(log n), leading to O(log n) space complexity.
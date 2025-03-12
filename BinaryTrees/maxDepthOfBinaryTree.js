/*Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const maxDepthRecursive = (root) => {
    //base case for empty tree or subtree
    if (!root) {
        return 0;
    }

    const left = maxDepth(root.left);
    const right = maxDepth(root.right);

    //add 1 to take root as part of path into account
    return Math.max(left, right) + 1;
}

const maxDepthIterative = (root) => {
    if (!root) {
        return 0;
    }

    let maxDepth = 0;

    const stack = [];
    stack.push([root, 0]);

    while (stack.length) {
        let [currentNode, currentDepth] = stack.pop();
        currentDepth++;

        maxDepth = Math.max(maxDepth, currentDepth);

        if (currentNode.left) stack.push([currentNode.left, currentDepth]);
        if (currentNode.right) stack.push([currentNode.right, currentDepth]);
    }

    return maxDepth;
}
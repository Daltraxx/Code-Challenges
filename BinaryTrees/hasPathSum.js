/*Given the root of a binary tree and an integer targetSum, 
return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const hasPathSumRecursive = (root, targetSum) => {
    //first base case
    if (!root) return false;

    //if targetSum can be met, subtracting from it will eventually equal 0
    targetSum -= root.val;

    //if node is leaf, see if path equals target sum (targetSum has been subtracted down to exactly 0)
    if (!root.left && !root.right) {
        return targetSum === 0;
    }

    //recursively follow path to left and right and return true if either ends in targetSum
    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
}

const hasPathSumIterative = (root, targetSum) => {
    if (!root) {
        return 0;
    }

    const stack = [];
    stack.push([root, 0]);

    while (stack.length) {
        const nodeAndPrevSum = stack.pop();
        const currentNode = nodeAndPrevSum[0];
        const currentSum = currentNode.val + nodeAndPrevSum[1];

        //if leaf, return true if currentSum equals targetSum
        if (!currentNode.left && !currentNode.right) {
            if (currentSum === targetSum) return true;
        }

        //push any children to stack to keep following path
        if (currentNode.left) stack.push([currentNode.left, currentSum]);
        if (currentNode.right) stack.push([currentNode.right, currentSum]);
    }

    //if targetSum is never found in while loop iterations, return false
    return false;
}
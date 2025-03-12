/*Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path 
from the root node down to the nearest leaf node.*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const minDepth = (root) => {
    //if root/child is null, no depth contributed
    if (!root) {
        return 0;
    }

    //if a child is null, search other path 
    //and account for current node contribution
    if (!root.left) {
        return minDepth(root.right) + 1;
    } else if (!root.right) {
        return minDepth(root.left) + 1;
    } 
    
    //if both children exist, return min depth of paths
    //and account for current node contribution
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
}

const minDepthIterative = (root) => {
    if (!root) return 0;

    const stack = [[root, 1]];
    let minDepthFound = Infinity;

    while (stack.length) {
        let [currentNode, depth] = stack.pop();

        //if current node is leaf, offer depth
        if (!currentNode.left && !currentNode.right) {
            minDepthFound = Math.min(minDepthFound, depth);
        }

        depth++;
        
        if (currentNode.left) stack.push([currentNode.left, depth]);
        if (currentNode.right) stack.push([currentNode.right, depth]);
    }

    return minDepthFound;
}
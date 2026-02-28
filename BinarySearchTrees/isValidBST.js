/*Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.*/

const isValidBST = (root) => {
    const validateTreeDFS = (node, lowerBound, higherBound) => {
        //if empty node reached, path to that point has been valid
        if (!node) {
            return true;
        }

        //return false if node's value does not fall within valid range 
        if (node.val <= lowerBound || node.val >= higherBound) {
            return false;
        }

        //subtrees of left and right children must be valid
        return validateTreeDFS(node.left, lowerBound, node.val) && validateTreeDFS(node.right, node.val, higherBound);
    }

    return validateTreeDFS(root, -Infinity, Infinity);
}

//iterative solution
class NodeState {
    constructor(node, lowerBound, higherBound) {
        this.node = node;
        this.lowerBound = lowerBound;
        this.higherBound = higherBound;
    }
}

const isValidBSTIterative = (root) => {
    if (root == null) {
        return true;
    }

    const stack = [new NodeState(root, -Infinity, Infinity)];

    while (stack.length) {
        const nodeState = stack.pop();
        const node = nodeState.node;

        if (node.val <= nodeState.lowerBound || node.val >= nodeState.higherBound) {
            return false;
        }

        if (node.left) stack.push(new NodeState(node.left, nodeState.lowerBound, node.val));
        if (node.right) stack.push(new NodeState(node.right, node.val, nodeState.higherBound));
    }

    return true;
}
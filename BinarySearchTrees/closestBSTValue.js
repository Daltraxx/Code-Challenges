/*Given the root of a binary search tree and a target value, 
return the value in the BST that is closest to the target. 
If there are multiple answers, print the smallest.

The number of nodes in the tree is in the range [1, 104]*/

const closestValue = (root, target) => {
    let closestValue = root.val;
    let currentNode = root;

    while (currentNode) {
        const closestDifference = Math.abs(target - closestValue);
        const currentDifference = Math.abs(target - currentNode.val);

        //offer current value as potential answer
        if (currentDifference < closestDifference || (currentDifference === closestDifference && currentNode.val < closestValue)) {
            closestValue = currentNode.val
        }

        //continue search through left or right child
        currentNode = target < currentNode.val ? currentNode.left : currentNode.right;
    }

    return closestValue;
}


//recursive solution below
const closestValueRecursive = (root, target) => {
    let closestValue = root.val;

    const findClosestValue = (node) => {
        if (!node) {
            return;
        }

        const closestDifference = Math.abs(target - closestValue);
        const currentDifference = Math.abs(target - node.val);

        //offer current value as potential answer
        if (currentDifference < closestDifference || (currentDifference === closestDifference && node.val < closestValue)) {
            closestValue = node.val
        }

        //only search in direction that might yield closer value
        if (target < node.val) {
            findClosestValue(node.left);
        } else {
            findClosestValue(node.right);
        }

        return;
    }

    findClosestValue(root);
    return closestValue;
}
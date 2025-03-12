/*Given the root of a binary tree, 
return the sum of values of its deepest leaves.*/

const deepestLeavesSum = (root) => {
    if (root == null) {
        return 0;
    }

    let deepestLeavesSum;

    let queue = [root];

    while (queue.length) {
        const nextLevelQueue = [];
        let currentLevelSum = 0;
        
        for (let node of queue) {
            currentLevelSum += node.val;
            if (node.left) nextLevelQueue.push(node.left);
            if (node.right) nextLevelQueue.push(node.right);
        }
        queue = nextLevelQueue;
        deepestLeavesSum = currentLevelSum;
    }

    return deepestLeavesSum;
}
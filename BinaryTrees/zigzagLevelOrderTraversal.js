/*Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. 
(i.e., from left to right, then right to left for the next level and alternate between).*/

const zigzagLevelOrder = (root) => {
    const treeTraversalOrder = [];

    if (!root) {
        return treeTraversalOrder;
    }

    let direction = 0;

    let queue = [root];

    while (queue.length) {
        const nextLevelQueue = [];
        const levelTraversalOrder = [];

        for (let node of queue) {
            if (direction % 2 == 0) { //right to left
                levelTraversalOrder.push(node.val)
            } else { //left to right
                levelTraversalOrder.unshift(node.val);
            }

            if (node.left) nextLevelQueue.push(node.left);
            if (node.right) nextLevelQueue.push(node.right);
        }

        treeTraversalOrder.push(levelTraversalOrder);
        queue = nextLevelQueue;
        direction++; //alternate directions
    }

    return treeTraversalOrder;
}
/*Given the root of a binary tree, 
return an array of the largest value in each row of the tree (0-indexed).*/

const largestValues = (root) => {
    const maxRowValues = [];

    if (!root) {
        return maxRowValues;
    }

    let queue = [root];

    while (queue.length) {
        const nextLevelQueue = [];
        let maxRowValue = -Infinity;

        for (let node of queue) {
            maxRowValue = Math.max(node.val, maxRowValue);

            if (node.left) nextLevelQueue.push(node.left);
            if (node.right) nextLevelQueue.push(node.right);
        }

        maxRowValues.push(maxRowValue);
        queue = nextLevelQueue;
    }

    return maxRowValues;
}

//DFS solutions below

const largestValuesDFSRecursive = (root) => {
    let maxRowValues = [];

    const dfs = (node, depth) => {
        if (!node) {
            return;
        }

        if (depth == maxRowValues.length) {
            maxRowValues[depth] = node.val;
        } else {
           maxRowValues[depth] = Math.max(node.val, maxRowValues[depth]);
        }

        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    }

    dfs(root, 0);
    return maxRowValues;
}

const largestValuesDFSIterative = (root) => {
    let maxRowValues = [];

    if (!root) {
        return maxRowValues;
    }

    const stack = [[root, 0]];

    while (stack.length) {
        const [node, depth] = stack.pop();

        if (!maxRowValues[depth]) {
            maxRowValues[depth] = node.val;
        } else {
            maxRowValues[depth] = Math.max(node.val, maxRowValues[depth]);
        }

        if (node.left) stack.push([node.left, depth + 1]);
        if (node.right) stack.push([node.right, depth + 1]);
    }

    return maxRowValues;
} 
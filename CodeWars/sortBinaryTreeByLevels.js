function treeByLevels(rootNode) {
    const nodeList = [];

    if (!rootNode) return nodeList;

    let queue = [rootNode];
    while (queue.length) {
        const nextQueue = [];
        for (let node of queue) {
            nodeList.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        queue = nextQueue;
    }

    return nodeList;
}
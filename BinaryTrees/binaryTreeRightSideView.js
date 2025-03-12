/*Given the root of a binary tree, 
imagine yourself standing on the right side of it, 
return the values of the nodes you can see ordered from top to bottom. */

const rightSideView = (root) => {
    const viewableNodes = [];

    if (!root) {
        return viewableNodes;
    }

    let queue = [root];

    while (queue.length) {
        const nextQueue = [];

        //last node is queue is viewable
        viewableNodes.push(queue.at(-1).val);

        for (let i = 0; i < queue.length; i++) {
            const currentNode = queue[i];
            if (currentNode.left) nextQueue.push(currentNode.left);
            if (currentNode.right) nextQueue.push(currentNode.right);
        }

        queue = nextQueue;
    }

    return viewableNodes;
}
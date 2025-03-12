/*Given the root of a binary tree, the value of a target node target, and an integer k, 
return an array of the values of all nodes that have a distance k from the target node.

You can return the answer in any order. */

const distanceK = (root, target, k) => {
    const setParents = (root) => {
        const stack = [[root, null]];

        while (stack.length) {
            const [node, parent] = stack.pop();
            parents.set(node, parent);

            if (node.left) stack.push([node.left, node]);
            if (node.right) stack.push([node.right, node]);
        }
    }

    const getNodesAtKDistance = (target) => {
        let queue = [target];

        while (queue.length && k > 0) {
            const nextLevelQueue = [];

            for (let node of queue) {
                for (let neighbor of [node.left, node.right, parents.get(node)]) {
                    if (neighbor && !seen.has(neighbor)) {
                        seen.add(neighbor);
                        nextLevelQueue.push(neighbor);
                    }
                }
            }

            k--;
            queue = nextLevelQueue;
        }

        return queue.map(node => node.val); 
    }

    const parents = new Map();
    setParents(root);

    const seen = new Set([target]);

    return getNodesAtKDistance(target);
}
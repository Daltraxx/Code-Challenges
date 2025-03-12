/*Given a binary tree root, 
a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

Return the number of good nodes in the binary tree.*/

const goodNodesRecursive = (root) => {
    const dfs = (node, maxSoFar) => {
        //if tree/subtree is empty, no good nodes
        if (!node) {
            return 0;
        }

        //count of good nodes will equal the number of good nodes found in the left and right subtrees
        const left = dfs(node.left, Math.max(maxSoFar, node.val));
        const right = dfs(node.right, Math.max(maxSoFar, node.val));
        let goodNodesCount = left + right;

        //if current node is good node, include in count
        if (node.val >= maxSoFar) goodNodesCount++;

        return goodNodesCount;
    }

    return dfs(root, -Infinity);
}

const goodNodesIterative = (root) => {
    if (!root) {
        return 0;
    }

    let goodNodesCount = 0;
    const stack = [];
    stack.push([root, -Infinity]);

    while (stack.length) {
        let [currentNode, maxSoFar] = stack.pop();

        //if current value is greater than prev maxSoFar, good node so increment count
        if (currentNode.val >= maxSoFar) goodNodesCount++;
        //keep maxSoFar updated
        maxSoFar = Math.max(maxSoFar, currentNode.val);

        //push existing children to stack to continue down tree
        if (currentNode.left) stack.push([currentNode.left, maxSoFar]);
        if (currentNode.right) stack.push([currentNode.right, maxSoFar]);
    }

    return goodNodesCount;
}
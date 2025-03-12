/*Given the root of a Binary Search Tree (BST), 
return the minimum absolute difference 
between the values of any two different nodes in the tree.

The number of nodes in the tree is in the range [2, 104]*/

const getMinimumDifference = (root) => {
    const values = [];

    const getSortedValues = (node) => {
        if (!node) {
            return;
        }

        getSortedValues(node.left);
        values.push(node.val);
        getSortedValues(node.right);

        return;
    }

    getSortedValues(root);

    let minimumDifference = Infinity;
    for (let i = 1; i < values.length; i++) {
        minimumDifference = Math.min(values[i] - values[i - 1], minimumDifference);
    }

    return minimumDifference;
}

const getMinimumDifferenceOptimized = (root) => {
    let prevNode;
    let minimumDifference = Infinity;

    const dfs = (node) => {
        if (!node) {
            return;
        }

        dfs(node.left);

        //find difference between node and next lesser value, offer as potential solution
        //(prevNode will initially be null so check first)
        if (prevNode) {
            minimumDifference = Math.min(node.val - prevNode.val, minimumDifference);
        }
        
        prevNode = node;

        dfs(node.right);

        return;
    }

    dfs(root);

    return minimumDifference;
}
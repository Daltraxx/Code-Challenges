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

// Time Complexity: O(n) where n is the number of nodes in the tree, as we visit
// each node once to get the sorted values, 
// and then we iterate through the sorted values once to find the minimum difference.
// Space Complexity: O(n) where n is the number of nodes in the tree, as we
// store the values of all nodes in an array.

const getMinimumDifferenceOptimized = (root) => {
    let prevVal;
    let minDifference = Infinity;

    const dfs = (node) => {
        if (!node) {
            return;
        }

        dfs(node.left);

        if (prevVal !== undefined) {
            minDifference = Math.min(node.val - prevVal, minDifference);
        }
        
        prevVal = node.val;

        dfs(node.right);

        return;
    }

    dfs(root);

    return minDifference;
}

// Time Complexity: O(n) where n is the number of nodes in the tree, as we visit
// each node once.
// Space Complexity: O(h) where h is the height of the tree, which in the
// worst case (a skewed tree) is O(n) and in the best case (a balanced tree) is
// O(log n).
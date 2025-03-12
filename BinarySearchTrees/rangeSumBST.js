/*Given the root node of a binary search tree and two integers low and high, 
return the sum of values of all nodes with a value in the inclusive range [low, high].*/

const rangeSumBST = (root, low, high) => {
    if (root == null) {
        return 0;
    }

    let sum = 0;

    if (root.val >= low && root.val <= high) {
        sum += root.val;
    }

    if (root.val > low) {
        sum += rangeSumBST(root.left, low, high);
    }

    if (root.val < high) {
        sum += rangeSumBST(root.right, low, high);
    }

    return sum;
}

const rangeSumBSTIterative = (root, low, high) => {
    let sum = 0;

    if (root == null) {
        return sum;
    }

    const stack = [root];

    while (stack.length) {
        const node = stack.pop();

        if (node.val >= low && node.val <= high) {
            sum += node.val;
        }

        if (node.val > low && node.left) stack.push(node.left);
        if (node.val < high && node.right) stack.push(node.right);
    }

    return sum;
}
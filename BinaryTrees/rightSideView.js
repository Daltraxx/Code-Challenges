/*Given the root of a binary tree, 
imagine yourself standing on the right side of it, 
return the values of the nodes you can see ordered from top to bottom. */

const rightSideView = (root) => {
  const viewableNodeVals = [];

  if (!root) {
    return viewableNodeVals;
  }

  let queue = [root];

  while (queue.length) {
    const nextQueue = [];

    // Last node in queue is viewable
    viewableNodeVals.push(queue.at(-1).val);

    for (const currentNode of queue) {
      if (currentNode.left) nextQueue.push(currentNode.left);
      if (currentNode.right) nextQueue.push(currentNode.right);
    }

    queue = nextQueue;
  }

  return viewableNodeVals;
};

// Time Complexity: O(n) where n is the number of nodes in the tree, as we visit each node once.
// Space Complexity: O(w) where w is the maximum width of the tree,
// as we store at most w nodes in the queue at any time.
// In the worst case, w can be O(n) for a complete binary tree.

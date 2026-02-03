const swapNodes = (head, k) => {
  // Find kth node from start
  let rightNode = head;
  for (let i = 1; i < k; i++) {
    rightNode = rightNode.next;
  }

  const kthNodeFromStart = rightNode;

  // Find kth node from end
  let kthNodeFromEnd = head;
  while (rightNode && rightNode.next) {
    kthNodeFromEnd = kthNodeFromEnd.next;
    rightNode = rightNode.next;
  }

  // Swap values
  [kthNodeFromStart.val, kthNodeFromEnd.val] = [
    kthNodeFromEnd.val,
    kthNodeFromStart.val,
  ];

  return head;
};

// Time Complexity: O(N) where N is the number of nodes in the linked list
// Space Complexity: O(1)
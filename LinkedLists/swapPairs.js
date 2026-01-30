const swapPairs = (head) => {
  if (!head || !head.next) return head;

  // The new head will always be the second node
  const newHead = head.next;
  let current = head;
  let prev = null;

  while (current && current.next) {
    if (prev) prev.next = current.next;
    prev = current;
    const next = current.next.next;
    current.next.next = current;
    current.next = next;
    current = next;
  }

  return newHead;
};

// Time Complexity: O(n) where n is the number of nodes in the linked list.
// Space Complexity: O(1) since we are only using a constant amount of extra space
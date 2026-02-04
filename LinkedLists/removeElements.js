const removeElements = (head, val) => {
  const sentinel = { next: head };
  let current = sentinel;
  while (current.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return sentinel.next;
};

// Time: O(n) where n is the number of nodes in the linked list
// Space: O(1) since we're modifying the list in place

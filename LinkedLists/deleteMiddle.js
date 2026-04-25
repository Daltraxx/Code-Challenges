const deleteMiddle = (head) => {
  if (!head || !head.next) return null;
  let slow = head;
  let fast = head;
  let prev = null;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prev.next = slow.next;
  return head;
};

// Time Complexity: O(n) - We traverse the linked list once to find the middle node.
// Space Complexity: O(1) - We use a constant amount of space for the pointers.

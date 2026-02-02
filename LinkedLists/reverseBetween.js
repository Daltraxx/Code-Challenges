const reverseBetween = (head, left, right) => {
  if (!head || left === right) return head;

  // Reach the node at position left
  let current = head;
  let leftPrev = null;
  for (let i = 1; i < left; i++) {
    leftPrev = current;
    current = current.next;
  }

  // Reverse the sublist from left to right
  let newTail = current;
  let prev = null;

  for (let i = left; i <= right; i++) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  // Reconnect the reversed sublist back to the main list
  let newHead = prev;
  if (leftPrev) {
    leftPrev.next = newHead;
  } else {
    head = newHead;
  }

  newTail.next = current;

  return head;
}

// Time Complexity: O(N)
// Space Complexity: O(1)
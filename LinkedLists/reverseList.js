const reverseList = (head) => {
  let prev = null;
  while (head) {
    let nextNode = head.next;
    head.next = prev;
    prev = head;
    head = nextNode;
  }

  return prev;
};

// Time complexity: O(n)
// Space complexity: O(1)

const reverseListRecursive = (head) => {
  if (!head || !head.next) {
    return head;
  }

  let newHead = reverseListRecursive(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};

// Time complexity: O(n)
// Space complexity: O(n) due to recursive call stack
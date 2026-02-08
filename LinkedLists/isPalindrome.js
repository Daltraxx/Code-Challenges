const isPalindrome = (head) => {
  if (!head) return true;

  // Find middle of list
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse second half of list
  let prev = null;
  let current = slow;
  while (current) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  // Compare first half and reversed second half
  let left = head;
  let right = prev;
  while (right) {
    if (left.val !== right.val) {
      return false;
    }
    left = left.next;
    right = right.next;
  }
  return true;
};

// Time Complexity: O(n) - We traverse the list a few times, but each traversal is O(n).
// Space Complexity: O(1) - We are reversing the list in place and using only a few pointers, so we are not using any additional space that grows with the input size.
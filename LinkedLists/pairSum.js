const pairSum = (head) => {
  // Find the middle of the list
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the list
  let prev = null;
  while (slow) {
    let next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // Find the max twin sum
  let leftTwin = head;
  let rightTwin = prev;
  let maxSum = -Infinity;
  while (rightTwin) {
    maxSum = Math.max(leftTwin.val + rightTwin.val, maxSum);
    leftTwin = leftTwin.next;
    rightTwin = rightTwin.next;
  }

  return maxSum;
}

// Time Complexity: O(N)
// Space Complexity: O(1)
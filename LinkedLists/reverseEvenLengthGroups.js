const reverseEvenLengthGroups = (head) => {
  let leftConnection = head;
  // Start from second node since head is not null and first group is never reversed
  let scout = head.next;
  let groupLength = 2;
  let groupCount = 0;
  while (scout) {
    groupCount++;
    // Evaluate need to reverse when we reach the end of the group or the end of the list
    if (groupCount === groupLength || !scout.next) {
      if (groupCount % 2 === 0) {
        // Prepare connections and reverse the group
        let current = leftConnection.next;
        let reversedTail = current;
        let reversedHead = scout;
        let prev = scout.next;
        leftConnection.next = reversedHead;
        for (let i = 0; i < groupCount; i++) {
          let nextNode = current.next;
          current.next = prev;
          prev = current;
          current = nextNode;
        }
        // Update left connection and scout to the new tail of the reversed group
        leftConnection = reversedTail;
        scout = reversedTail;
      } else {
        // No reversal, just move the left connection to the end of the current group
        leftConnection = scout;
      }
      // Reset for the next group
      groupCount = 0;
      groupLength++;
    }
    // Move scout to the next node
    scout = scout.next;
  }

  return head;
};

// Time Complexity: O(N) where N is the number of nodes in the linked list
// Space Complexity: O(1)

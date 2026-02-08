const oddEvenList = (head) => {
  if (!head || !head.next) return null;

  let odd = head;
  let even = head.next;
  let evenHead = even;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;

    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;
  return head;
};

// Time Complexity: O(n) where n is the number of nodes in the linked list
// Space Complexity: O(1) since we are rearranging the nodes in place without using any additional data structures
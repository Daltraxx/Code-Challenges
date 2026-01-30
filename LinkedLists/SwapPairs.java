package LinkedLists;

public class SwapPairs {
  public ListNode swapPairs(ListNode head) {
    if (head == null || head.next == null)
      return head;

    // The new head will always be the second node
    ListNode newHead = head.next;
    ListNode prev = null;
    ListNode current = head;

    while (current != null && current.next != null) {
      if (prev != null) {
        prev.next = current.next;
      }
      ListNode next = current.next.next;
      current.next.next = current;
      current.next = next;
      prev = current;
      current = next;
    }

    return newHead;
  }
}

// Time Complexity: O(n) where n is the number of nodes in the linked list.
// Space Complexity: O(1) since we are only using a constant amount of extra space
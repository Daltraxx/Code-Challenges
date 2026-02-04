package LinkedLists;

public class RemoveElements {
  public ListNode removeElements(ListNode head, int val) {
    ListNode sentinel = new ListNode(0, head);
    ListNode current = head;
    ListNode prev = sentinel;
    while (current != null) {
      if (current.val == val) {
        prev.next = current.next;
      } else {
        prev = current;
      }
      current = current.next;
    }

    return sentinel.next;
  }
}

// Time Complexity: O(n)
// Space Complexity: O(1)
package LinkedLists;

public class DeleteDuplicates {
  public ListNode deleteDuplicates(ListNode head) {
    ListNode current = head;
    while (current != null && current.next != null) {
      if (current.val == current.next.val) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }

    return head;
  }
}

// Time Complexity: O(n) where n is the number of nodes in the linked list.
// Space Complexity: O(1) since we are not using any additional data structures.
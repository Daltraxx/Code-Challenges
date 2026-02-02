package LinkedLists;

public class ReverseBetween {
  public ListNode reverseBetween(ListNode head, int left, int right) {
    if (head == null || left == right) {
      return head;
    }
    
    // Find node at left position (1-indexed)
    ListNode current = head;
    ListNode prevLeft = null;
    for (int i = 1; i < left; i++) {
      prevLeft = current;
      current = current.next;
    }

    // Perform reversal
    ListNode reversedTail = current;
    ListNode prevNode = null;
    for (int i = left; i <= right; i++) {
      ListNode nextNode = current.next;
      current.next = prevNode;
      prevNode = current;
      current = nextNode;
    }

    // Connect head and tail of reversed segment to larger list
    ListNode reversedHead = prevNode;
    if (prevLeft != null) {
      prevLeft.next = reversedHead;
    } else {
      head = reversedHead;
    }

    reversedTail.next = current;

    return head;
  }
}

// Time Complexity: O(N)
// Space Complexity: O(1)
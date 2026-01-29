package LinkedLists;

public class MiddleNode {
  public ListNode middleNode(ListNode head) {
    ListNode slow = head;
    ListNode fast = head;
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }
}

// Time Complexity: O(N) where N is the number of nodes in the linked list.
// Space Complexity: O(1) as we are using only constant extra space.
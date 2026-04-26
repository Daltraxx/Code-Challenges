package LinkedLists;

public class ReverseList {
  public ListNode reverseListIterative(ListNode head) {
    ListNode prev = null;
    while (head != null) {
      ListNode nextNode = head.next;
      head.next = prev;
      prev = head;
      head = nextNode;
    }

    return prev;
  }
  // Time complexity: O(n) we visit each node once
  // Space complexity: O(1)

  public ListNode reverseListRecursive(ListNode head) {
    if (head == null || head.next == null) {
      return head;
    }

    ListNode newHead = reverseListRecursive(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
  }

  // Time complexity: O(n) we visit each node once
  // Space complexity: O(n) due to recursive call stack
}

package LinkedLists;

public class OddEvenList {
  public ListNode oddEvenList(ListNode head) {
    if (head == null || head.next == null) {
      return head;
    }

    ListNode odd = head;
    ListNode even = head.next;
    ListNode evenHead = even;

    while (even != null && even.next != null) {
      odd.next = even.next;
      odd = odd.next;

      even.next = odd.next;
      even = even.next;
    }

    odd.next = evenHead;
    return head;
  }
}

// Time Complexity: O(n) where n is the number of nodes in the linked list.
// Space Complexity: O(1) since we are rearranging the nodes in place without using any additional data structures.
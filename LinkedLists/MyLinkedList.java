package LinkedLists;

public class MyLinkedList {
  private ListNode head;
  private int size;

  public MyLinkedList() {
    head = null;
    size = 0;
  }

  public MyLinkedList(ListNode head) {
    // Note: Allowing user to pass in a head node is not required by problem statement
    this.head = head;
    size = 0;
    ListNode current = head;
    while (current != null) {
      size++;
      current = current.next;
    }
  }

  public int get(int index) {
    if (index < 0 || index >= size) {
      return -1;
    }

    ListNode current = head;
    for (int i = 0; i < index; i++) {
      current = current.next;
    }
    return current.val;
  }

  public void addAtHead(int val) {
    addAtIndex(0, val);
  }

  public void addAtTail(int val) {
    addAtIndex(size, val);
  }

  public void addAtIndex(int index, int val) {
    if (index < 0 || index > size) {
      return;
    }

    ListNode sentinel = new ListNode(0, head);
    ListNode prev = sentinel;
    for (int i = 0; i < index; i++) {
      prev = prev.next;
    }
    ListNode newNode = new ListNode(val, prev.next);
    prev.next = newNode;
    // Update head if necessary
    head = sentinel.next;
    size++;
  }

  public void deleteAtIndex(int index) {
    if (index < 0 || index >= size) {
      return;
    }

    ListNode sentinel = new ListNode(0, head);
    ListNode prev = sentinel;
    for (int i = 0; i < index; i++) {
      prev = prev.next;
    }
    prev.next = prev.next.next;
    // Update head if necessary
    head = sentinel.next;
    size--;
  }
}

// Time complexity: O(1) for addAtHead, O(N) for everything else

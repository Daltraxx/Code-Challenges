package LinkedLists;

public class MyLinkedList {
  ListNode head;
  int size;

  public MyLinkedList() {
    this.head = null;
    this.size = 0;
  }

  public MyLinkedList(ListNode head) {
    this.head = head;
    this.size = 0;
    if (head != null) {
      ListNode current = head;
      while (current != null) {
        size++;
        current = current.next;
      }
    }
  }

  public int get(int index) {
    if (index < 0 || index >= this.size) {
      return -1;
    }

    ListNode current = this.head;
    for (int i = 0; i < index; i++) {
      current = current.next;
    }
    return current.val;
  }

  public void addAtHead(int val) {
    addAtIndex(0, val);
  }

  public void addAtTail(int val) {
    addAtIndex(this.size, val);
  }

  public void addAtIndex(int index, int val) {
    if (index < 0 || index > this.size) {
      return;
    }
    this.size++;

    ListNode sentinel = new ListNode(0, this.head);
    ListNode prev = sentinel;
    for (int i = 0; i < index; i++) {
      prev = prev.next;
    }
    ListNode newNode = new ListNode(val, prev.next);
    prev.next = newNode;
    // Update head if necessary
    this.head = sentinel.next;
  }

  public void deleteAtIndex(int index) {
    if (index < 0 || index >= this.size) {
      return;
    }
    this.size--;

    ListNode sentinel = new ListNode(0, this.head);
    ListNode prev = sentinel;
    for (int i = 0; i < index; i++) {
      prev = prev.next;
    }
    prev.next = prev.next.next;
    // Update head if necessary
    this.head = sentinel.next;
  }
}

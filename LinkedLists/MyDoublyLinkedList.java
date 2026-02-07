package LinkedLists;

public class MyDoublyLinkedList {
  private static class ListNodeDouble {
    int val;
    ListNodeDouble prev;
    ListNodeDouble next;

    ListNodeDouble(int val) {
      this.val = val;
      this.prev = null;
      this.next = null;
    }

    ListNodeDouble(int val, ListNodeDouble prev, ListNodeDouble next) {
      this.val = val;
      this.prev = prev;
      this.next = next;
    }
  }

  ListNodeDouble head;
  ListNodeDouble tail;
  int size;

  public MyDoublyLinkedList() {
    // Use dummy head and tail
    this.head = new ListNodeDouble(0);
    this.tail = new ListNodeDouble(0, head, null);
    this.size = 0;
    head.prev = null;
    head.next = tail;
  }

  public int get(int index) {
    if (index < 0 || index >= size) {
      return -1;
    }

    ListNodeDouble node = getNodeAtIndex(index);
    return node.val;
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

    ListNodeDouble current = getNodeAtIndex(index);
    ListNodeDouble newNode = new ListNodeDouble(val, current.prev, current);
    current.prev.next = newNode;
    current.prev = newNode;
    size++;
  }

  public void deleteAtIndex(int index) {
    if (index < 0 || index >= size) {
      return;
    }

    ListNodeDouble nodeToDelete = getNodeAtIndex(index);
    nodeToDelete.prev.next = nodeToDelete.next;
    nodeToDelete.next.prev = nodeToDelete.prev;
    size--;
  }

  private ListNodeDouble getNodeAtIndex(int index) {
    ListNodeDouble current;
    if (index <= size / 2) {
      current = head.next;
      for (int i = 0; i < index; i++) {
        current = current.next;
      }
    } else {
      current = tail;
      for (int i = 0; i < size - index; i++) {
        current = current.prev;
      }
    }
    return current;
  }
}

// Time Complexity: O(n) for get, addAtIndex, deleteAtIndex; O(1) for addAtHead and addAtTail

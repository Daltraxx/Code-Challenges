class ListNode {
  constructor(val, prev = null, next = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

class MyDoublyLinkedList {
  constructor() {
    // Use dummy head and tail nodes to simplify edge cases
    this.head = new ListNode(0);
    this.tail = new ListNode(0, this.head);
    this.size = 0;
    this.head.next = this.tail;
  }

  get(index) {
    if (index < 0 || index >= this.size) return -1;
    const node = this.#getNodeByIndex(index);
    return node.val;
  }

  addAtHead(val) {
    this.addAtIndex(0, val);
  }

  addAtTail(val) {
    this.addAtIndex(this.size, val);
  }

  addAtIndex(index, val) {
    if (index < 0 || index > this.size) return;
    const nodeAtIndex = this.#getNodeByIndex(index);
    const newNode = new ListNode(val, nodeAtIndex.prev, nodeAtIndex);
    newNode.prev.next = newNode;
    nodeAtIndex.prev = newNode;
    this.size++;
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) return;
    const nodeToDelete = this.#getNodeByIndex(index);
    nodeToDelete.prev.next = nodeToDelete.next;
    nodeToDelete.next.prev = nodeToDelete.prev;
    this.size--;
  }

  #getNodeByIndex(index) {
    let current;
    if (index <= this.size / 2) {
      // Start at this.head.next because index=0 should return actual head
      current = this.head.next;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    } else {
      // Start at this.tail because index=this.size should return dummy tail
      current = this.tail;
      for (let i = 0; i < this.size - index; i++) {
        current = current.prev;
      }
    }

    return current;
  }
}

// Time: O(n) for get, addAtIndex, and deleteAtIndex, O(1) for addAtHead and addAtTail
// Space: O(n) for the linked list itself

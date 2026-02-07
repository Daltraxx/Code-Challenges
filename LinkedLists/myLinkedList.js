class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class MyLinkedList {
  constructor(head = null) {
    // Use dummy
    this.head = new ListNode(0, head);
    this.size = 0;
    if (head) {
      let current = head;
      while (current) {
        this.size++;
        current = current.next;
      }
    }
  }

  get(index) {
    if (index < 0 || index >= this.size) return -1;
    let current = this.head.next;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.val;
  }

  addAtHead(val) {
    this.addAtIndex(0, val);
  }

  addAtTail(val) {
    this.addAtIndex(this.size, val);
  }

  addAtIndex(index, val) {
    if (index < 0 || index > this.size) return;
    let prev = this.head;
    for (let i = 0; i < index; i++) {
      prev = prev.next;
    }

    const newNode = new ListNode(val, prev.next);
    prev.next = newNode;
    this.size++;
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) return;
    let prev = this.head;
    for (let i = 0; i < index; i++) {
      prev = prev.next;
    }
    prev.next = prev.next.next;
    this.size--;
  }

  printList() {
    let current = this.head.next;
    const nodeReps = [];
    while (current) {
      nodeReps.push(`${current.val} -> `);
      current = current.next;
    }
    nodeReps.push("null");
    console.log(nodeReps.join(""));
  }
}

// Time complexity: O(1) for addAtHead, O(N) for everything else

const obj = new MyLinkedList();
obj.addAtHead(1);
obj.addAtTail(3);
obj.addAtIndex(1, 2);
console.log(obj.get(1));
obj.deleteAtIndex(1);
console.log(obj.get(1));
obj.printList();
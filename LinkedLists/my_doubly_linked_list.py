class ListNodeDouble:
    def __init__(
        self, val: int, prev: "ListNodeDouble" = None, next: "ListNodeDouble" = None
    ):
        self.val = val
        self.prev = prev
        self.next = next


class MyDoublyLinkedList:
    def __init__(self, head: ListNodeDouble = None):
        # Note: Allowing user to pass in head node, though not required by problem statement.
        # Use dummy head
        self.head = ListNodeDouble(0, None, head)
        self.size = 0
        current = self.head
        while current.next:
            self.size += 1
            current = current.next
        # Use dummy tail
        self.tail = ListNodeDouble(0, current)
        current.next = self.tail

    def get(self, index: int) -> int:
        if index < 0 or index >= self.size:
            return -1

        current = self._getNode(index)

        return current.val

    def addAtHead(self, val: int) -> None:
        self.addAtIndex(0, val)

    def addAtTail(self, val: int) -> None:
        self.addAtIndex(self.size, val)

    def addAtIndex(self, index: int, val: int) -> None:
        if index < 0 or index > self.size:
            return

        current = self._getNode(index)
        new_node = ListNodeDouble(val, current.prev, current)
        current.prev.next = new_node
        current.prev = new_node

        self.size += 1

    def deleteAtIndex(self, index: int) -> None:
        if index < 0 or index >= self.size:
            return

        current = self._getNode(index)
        current.prev.next = current.next
        current.next.prev = current.prev

        self.size -= 1

    def _getNode(self, index: int) -> ListNodeDouble:
        if index <= self.size // 2:
            current = self.head.next
            for _ in range(index):
                current = current.next
        else:
            current = self.tail
            for _ in range(self.size - index):
                current = current.prev
        return current

    def printList(self) -> None:
        current = self.head.next
        node_list = ["Dummy Head <-> "]
        while current.next:
            node_list.append(f"{current.val} <-> ")
            current = current.next
        node_list.append("Dummy Tail")
        print("".join(node_list))


obj = MyDoublyLinkedList()
obj.addAtHead(1)
obj.printList()  # Dummy Head <-> 1 <-> Dummy Tail
obj.addAtTail(3)
obj.printList()  # Dummy Head <-> 1 <-> 3 <-> Dummy Tail
obj.addAtIndex(1, 2)  # linked list becomes 1->2->3
obj.printList()  # Dummy Head <-> 1 <-> 2 <-> 3 <-> Dummy Tail
obj.get(1)  # return 2
obj.deleteAtIndex(1)  # now the linked list is 1->3
obj.printList()  # Dummy Head <-> 1 <-> 3 <-> Dummy Tail
obj.get(1)  # return 3

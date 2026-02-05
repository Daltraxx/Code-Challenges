from list_node import ListNode


class MyLinkedList:
    def __init__(self, head: ListNode = None):
        self.head = head
        self.size = 0
        if head:
            current = head
            while current:
                self.size += 1
                current = current.next

    def get(self, index: int) -> int:
        if index < 0 or index >= self.size:
            return -1
        current = self.head
        for _ in range(index):
            current = current.next
        return current.val

    def addAtHead(self, val: int) -> None:
        self.addAtIndex(0, val)

    def addAtTail(self, val: int) -> None:
        self.addAtIndex(self.size, val)

    def addAtIndex(self, index: int, val: int) -> None:
        if index < 0 or index > self.size:
            return
        self.size += 1
        sentinel = ListNode(0, self.head)
        prev = sentinel
        for _ in range(index):
            prev = prev.next
        new_node = ListNode(val, prev.next)
        prev.next = new_node
        # Update head if necessary
        self.head = sentinel.next

    def deleteAtIndex(self, index: int) -> None:
        if index < 0 or index >= self.size:
            return
        self.size -= 1
        sentinel = ListNode(0, self.head)
        prev = sentinel
        for _ in range(index):
            prev = prev.next

        prev.next = prev.next.next
        # Update head if necessary
        self.head = sentinel.next

    def printList(self) -> None:
        current = self.head
        node_list = []
        while current:
            node_list.append(f"{current.val} -> ")
            current = current.next
        node_list.append("None")
        print("".join(node_list))


linkedList = MyLinkedList()
linkedList.addAtHead(1)
linkedList.printList()  # 1->None
linkedList.addAtTail(3)
linkedList.printList()  # 1->3->None
linkedList.addAtIndex(1, 2)  # linked list becomes 1->2->3
linkedList.printList()  # 1->2->3->None
print(linkedList.get(1))  # return 2
linkedList.deleteAtIndex(1)  # now the linked list is 1->3
print(linkedList.get(1))  # return

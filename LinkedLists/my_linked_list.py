from list_node import ListNode


class MyLinkedList:
    def __init__(self, head: ListNode = None):
        self.head = head

    def get(self, index: int) -> int:
        current = self.head
        for _ in range(index):
            if not current:
                return -1
            current = current.next
        return current.val if current else -1

    def addAtHead(self, val: int) -> None:
        newHead = ListNode(val, self.head)
        self.head = newHead

    def addAtTail(self, val: int) -> None:
        newNode = ListNode(val)
        if not self.head:
            self.head = newNode
            return

        current = self.head
        while current.next:
            current = current.next

        current.next = newNode

    def addAtIndex(self, index: int, val: int) -> None:
        newNode = ListNode(val)
        sentinel = ListNode(0, self.head)
        prev = sentinel
        current = self.head
        i = 0
        while current and i < index:
            prev = current
            current = current.next
            i += 1
        if i == index:
            prev.next = newNode
            newNode.next = current
        if sentinel.next == newNode:
            self.head = newNode

    def deleteAtIndex(self, index: int) -> None:
        sentinel = ListNode(0, self.head)
        prev = sentinel
        current = self.head
        i = 0
        while current and i < index:
            prev = current
            current = current.next
            i += 1
        if i == index:
            if current:
                prev.next = current.next
            else:
                # At tail
                prev.next = None

        self.head = sentinel.next

    def printList(self) -> None:
        current = self.head
        listAsString = ""
        while current:
            listAsString += str(current.val) + "->"
            current = current.next
        listAsString += "None"
        print(listAsString)


linkedList = MyLinkedList()
linkedList.addAtHead(1)
linkedList.printList()  # 1->None
linkedList.addAtTail(3)
linkedList.printList()  # 1->3->None
linkedList.addAtIndex(1, 2)  # linked list becomes 1->2->3
linkedList.printList()  # 1->2->3->None
print(linkedList.get(1))  # return 2
linkedList.deleteAtIndex(1)  # now the linked list is 1->3
print(linkedList.get(1))  # return 3

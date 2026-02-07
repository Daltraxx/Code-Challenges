from typing import Optional
from list_node import ListNode


class OddEvenList:
    def odd_even_list(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return head

        odd_list_current = head
        even_list_head = head.next
        even_list_current = even_list_head
        current = even_list_head.next
        isOdd = True
        while current:
            if isOdd:
                odd_list_current.next = current
                odd_list_current = current
            else:
                even_list_current.next = current
                even_list_current = current
            current = current.next
            isOdd = not isOdd

        odd_list_current.next = even_list_head
        even_list_current.next = None # Extremely important to avoid cycles in the list
        return head

    # For debugging purposes
    def print_list(self, head: Optional[ListNode]) -> None:
        current = head
        while current:
            print(current.val, end=" -> ")
            current = current.next
        print()


obj = OddEvenList()
head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(3)
head.next.next.next = ListNode(4)
head.next.next.next.next = ListNode(5)
result = obj.odd_even_list(head)
print("Final list:")
obj.print_list(result)

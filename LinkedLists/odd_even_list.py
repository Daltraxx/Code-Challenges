from typing import Optional
from list_node import ListNode


class OddEvenList:
    def odd_even_list(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return head

        odd = head
        even = head.next
        even_head = even

        while even and even.next:
            odd.next = even.next
            odd = odd.next

            even.next = odd.next
            even = even.next

        # Connect the end of the odd list to the head of the even list
        odd.next = even_head

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

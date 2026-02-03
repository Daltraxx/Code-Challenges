from typing import Optional
from LinkedLists.list_node import ListNode


class ReverseEvenLengthGroups:
    def reverse_even_length_groups(
        self, head: Optional[ListNode]
    ) -> Optional[ListNode]:
        nodes_in_current_group = 0
        current_group_length = 1
        fast = head
        slow = head
        while fast:
            nodes_in_current_group += 1
            if nodes_in_current_group == current_group_length or not fast.next:
                if nodes_in_current_group % 2 == 0:
                    # Perform reversals
                    left_connection = slow
                    right_connection = fast.next
                    slow = slow.next
                    # Current node is reversed tail
                    reversed_tail = slow
                    prev = right_connection
                    for _ in range(nodes_in_current_group):
                        nextNode = slow.next
                        slow.next = prev
                        prev = slow
                        slow = nextNode
                    # Prev points to reversed head
                    left_connection.next = prev
                    # Set slow pointer to one node back to preserve connection if needed
                    slow = reversed_tail
                    # Prepare fast pointer to traverse into next group
                    fast = reversed_tail
                else:
                    slow = fast

                nodes_in_current_group = 0
                current_group_length += 1

            fast = fast.next

        return head

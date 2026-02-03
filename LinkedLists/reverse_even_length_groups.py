from typing import Optional
from LinkedLists.list_node import ListNode


class ReverseEvenLengthGroups:
    def reverse_even_length_groups(
        self, head: Optional[ListNode]
    ) -> Optional[ListNode]:
        nodes_in_current_group = 0
        current_group_length = 1
        # No need for dummy node since head is never reversed
        fast = head
        slow = head
        while fast:
            nodes_in_current_group += 1
            # If end of group or end of list
            if nodes_in_current_group == current_group_length or not fast.next:
                if nodes_in_current_group % 2 == 0:
                    # Capture boundaries and prepare for reversal
                    left_connection = slow
                    right_connection = fast.next
                    current = slow.next
                    reversed_head = fast
                    reversed_tail = current
                    # Set prev to right connection since it will be the new next for the tail
                    prev = right_connection

                    for _ in range(nodes_in_current_group):
                        next_node = current.next
                        current.next = prev
                        prev = current
                        current = next_node

                    # Connect reversed group head back to list (tail connected in first iteration)
                    left_connection.next = reversed_head

                    # Prepare slow and fast pointers for next group
                    slow = reversed_tail
                    fast = reversed_tail
                else:
                    # Move slow pointer to node before next group that could be reversed
                    slow = fast

                # Reset for next group
                nodes_in_current_group = 0
                current_group_length += 1

            fast = fast.next

        return head


# Time Complexity: O(N)
# Space Complexity: O(1)

/*Given the head of a sorted linked list, 
delete all duplicates such that each element appears only once. 
Return the linked list sorted as well.*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const deleteDuplicates = (head) => {
    let current = head;

    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head;
}

/*Time complexity : O(n). Because each node in the list is checked exactly once to determine if it is a duplicate or not, 
the total run time is O(n), 
where n is the number of nodes in the list.

Space complexity : O(1). No additional space is used.*/

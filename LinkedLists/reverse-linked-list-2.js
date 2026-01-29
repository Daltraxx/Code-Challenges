/*Given the head of a singly linked list 
and two integers left and right where left <= right, 
reverse the nodes of the list from position left to position right, 
and return the reversed list.*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = (head, left, right) => {
    let start = head, end = head;

    for (let i = 0; i < right - 1; i++) {
        if (i < left - 1) start = start.next;
        end = end.next;
    }

    let prev = end.next;
    head.next = end;

    while (start !== end.next) {
        let nextNode = start.next;
        start.next = prev;
        prev = start;
        start = nextNode;
    }

    return head;
};
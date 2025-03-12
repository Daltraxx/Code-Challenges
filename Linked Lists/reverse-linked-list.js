/*Given the head of a singly linked list, 
reverse the list, and return the reversed list.*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const reverseList = (head) => {
    let prev = null;
    let curr = head;

    while (curr) {
        //store next node for next iteration before reversing pointer
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    //return new head
    return prev;
}

//linear time and constant space
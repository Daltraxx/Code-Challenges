/*Given a linked list, swap every two adjacent nodes and return its head. 
You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/* Algorithm steps
1. Performs an edge swap from A -> B -> C -> ... to A <-> B C -> ....
2. Make sure we can still access the rest of the list beyond the current pair (saves C).
3. Now that A <-> B is isolated from the rest of the list, save a pointer to A to connect it with the rest of the list later. Move to the next pair.
4. Connect the previous pair to the rest of the list. In this case connecting A -> D.
5. Use a dummy pointer to keep a reference to what we want to return.
6. Handle the case when there's an odd number of nodes.*/

const swapPairs = (head) => {
    if (!head || !head.next) {
        return head;
    }

    let dummy = head.next; //step 5
    let prev = null; //initialize for step 3

    while (head && head.next) {
        if (prev) {
            prev.next = head.next; //step 4
        }
        prev = head; //step 3

        let nextNode = head.next.next; //step 2
        head.next.next = head; //step 1

        head.next = nextNode; //step 6
        head = nextNode; //move to next pair (step 3)
    }

    return dummy;
}

//linear time and constant space
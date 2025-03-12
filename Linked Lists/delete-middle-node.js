/*You are given the head of a linked list. 
Delete the middle node, and return the head of the modified linked list.

The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, 
where ⌊x⌋ denotes the largest integer less than or equal to x.*/

const deleteMiddle = (head) => {
    if (!head || !head.next) return null;
    let slow = head, fast = head;
    let prev = null;

    //get middle of list while keeping track of previous node
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    
    prev.next = slow.next;
    return head;
}

//linear time and constant space
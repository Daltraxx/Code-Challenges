/*Given the head of a linked list, 
remove the nth node from the end of the list and return its head.*/

const removeNthFromEnd = (head, n) => {
    if (!head.next) return null;
    let slow = head, fast = head;
    while (n > 0) {
        fast = fast.next;
        n--;
    }

    //if node to be deleted is first node
    if (!fast) {
        head = slow.next;
        return head;
        
    }

    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;
    
    return head;
}
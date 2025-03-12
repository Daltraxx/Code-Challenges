/*Given the head of a sorted linked list, 
delete all nodes that have duplicate numbers, 
leaving only distinct numbers from the original list. 
Return the linked list sorted as well.*/

const deleteDuplicates = (head) => {
    let sentinel = new ListNode(0, head);

    let pred = sentinel //predecessor, last node before sublist of duplicates

    while (head) {
        if (head.next && head.val === head.next.val) { //if beginning of duplicate sublist
            while (head.next && head.val === head.next.val) { //move to end of duplicate sublist
                head = head.next;
            }
            pred.next = head.next //skip all duplicates
        } else { //otherwise, move predecessor
            pred = pred.next; 
        }

        head = head.next //move forward
    }

    return sentinel.next;
}
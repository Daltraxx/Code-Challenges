/*In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.

For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.
The twin sum is defined as the sum of a node and its twin.

Given the head of a linked list with even length, return the maximum twin sum of the linked list.*/

const pairSum = (head) => {
    
    const findMiddle = (head) => {
        let fast = head, slow = head, prev;
        while (fast && fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        //retrn middle and prev since its pointer will need to point to last node in list (because of second half reversal)
        return [slow, prev];
    }

    let [middle, prev] = findMiddle(head);
    //console.log(middle, prev);
    
    const reverse2ndHalfAndGetLength = (middle, prev) => {
        let lastNode = prev;
        let length = 0;
        while (lastNode.next) {
            lastNode = lastNode.next;
            //keep track of length for next step
            length++;
        }
        //preemptively set prev.next to last node
        prev.next = lastNode;

        let current = middle;
        let prevNode = null;
        while (current) {
            let nextNode = current.next;
            current.next = prevNode;
            prevNode = current; 
            current = nextNode;
        }

        return length*2;
    }
    
    const length = reverse2ndHalfAndGetLength(middle, prev);
    
    let current = head, twin = head;
    for (let i = 0; i < length / 2; i++) {
        twin = twin.next;
    }

    let maxSum = 0;

    while (twin) {
        maxSum = Math.max(maxSum, current.val + twin.val);
        current = current.next;
        twin = twin.next;
    }
    
    return maxSum;
};

//linear time and constant space

const pairSumLeet = (head) => {
    let slow = head, fast = head;

    //get middle of linked list
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    //reverse second half of linked list
    let prev = null;
    while (slow) {
        let nextNode = slow.next;
        slow.next = prev;
        prev = slow;
        slow = nextNode;
    }

    let start = head;
    let maxSum = 0;
    //prev is pointing to start of reversed list at end of reversal
    while (prev) {
        maxSum = Math.max(maxSum, start.val + prev.val);
        prev = prev.next;
        start = start.next;
    }

    return maxSum;
}
/*Given two integer arrays pushed and popped each with distinct values, 
return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, 
or false otherwise.

All the elements of pushed are unique.
popped.length == pushed.length
popped is a permutation of pushed.*/

const validateStackSequences = (pushed, popped) => {
    const stack = [];
    let pushPointer = 0;
    let popPointer = 0;

    while (pushPointer < pushed.length) {
        stack.push(pushed[pushPointer]);
        while (stack.length > 0 && popped[popPointer] === stack[stack.length - 1]) {
            stack.pop();
            popPointer++;
        }
        pushPointer++;
    }

    return stack.length === 0;
}

//linear time and space

const pushed = [1,2,3,4,5], popped = [4,5,3,2,1];
console.log(validateStackSequences(pushed, popped));
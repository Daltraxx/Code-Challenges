/*Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.*/

class MinStack1 {
    constructor() {
        this.stack = [];
    }

    push(val) {
        if (this.stack.length) {
            let min = this.stack[this.stack.length - 1][1];
            val < min ? this.stack.push([val, val]) : this.stack.push([val, min]);
        } else {
            this.stack.push([val, val]);
        }
    }

    pop() {
        return this.stack.pop()[0];
    }

    top() {
        return this.stack[this.stack.length - 1][0];
    }

    getMin() {
        return this.stack.length ? this.stack[this.stack.length - 1][1] : null;
    }
}

//each operation is constant time

class MinStack2 {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val);
        if (val <= this.getMin() || !this.minStack.length) this.minStack.push(val);
    }

    pop() {
        const popValue = this.stack.pop();
        if (this.getMin() === popValue) this.minStack.pop();
        return popValue;
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

class MinStack3 {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val);
        if (val < this.getMin() || !this.minStack.length) {
            this.minStack.push([val, 1]);
        } else if (val === this.getMin()) {
            this.minStack[this.minStack.length - 1][1]++;
        }
    }

    pop() {
        const popValue = this.stack.pop();
        if (this.getMin() === popValue) {
            this.minStack[this.minStack.length - 1][1]--;
            if (this.minStack[this.minStack.length - 1][1] === 0) this.minStack.pop();
        }
        return popValue;
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack.length ? this.minStack[this.minStack.length - 1][0] : null;
    }
}

//constant time and linear space (space potentially saved due to eliminating repeated min values being added to minStack)

const obj = new MinStack3();

obj.push(-2);
obj.push(0);
obj.push(-3);
//console.log(obj.minStack);
console.log(obj.getMin());
console.log(obj.pop());
console.log(obj.top());
console.log(obj.getMin());
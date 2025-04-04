package Stacks;

import java.util.Stack;

/*Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function. */

public class MinStack {
    Stack<Integer> stack;
    Stack<int[]> minStack;

    public MinStack() {
        this.stack = new Stack<>();
        this.minStack = new Stack<>();
    }

    public void push(int val) {
        stack.push(val);
        if (minStack.isEmpty() || val < minStack.peek()[0]) {
            minStack.push(new int[] {val, 1});
        } else if (minStack.peek()[0] == val) {
            minStack.peek()[1]++;
        }
    }

    public void pop() {
        if (minStack.peek()[0] == stack.pop()) minStack.peek()[1]--;
        
        if (minStack.peek()[1] == 0) minStack.pop();
    }

    public int top() {
        return stack.peek();
    }

    public int getMin() {
        return minStack.peek()[0];
    }

}
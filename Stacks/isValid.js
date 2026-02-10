/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

constraint: s consists of parentheses only '()[]{}'.*/

const isValid = (s) => {
    const parenthesesMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    const stack = [];

    for (let char of s) {
        if (char in parenthesesMap) {
            stack.push(char);
        } else {
            //remember that below line will throw error in some languages like Java if stack is empty
            if (char !== parenthesesMap[stack[stack.length - 1]]) {
                return false;
            } else {
                stack.pop();
            }
        }
    }

    return !stack.length;
}

//linear time and space
const s = "()[]{}";
console.log(isValid(s));
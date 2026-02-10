/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

constraint: s consists of parentheses only '()[]{}'.*/

const isValid = (s) => {
  const parenthesesMap = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
  ]);

  const stack = [];

  for (let char of s) {
    if (parenthesesMap.has(char)) {
      // If it's an opening char, push it onto the stack
      stack.push(char);
    } else {
      // If the stack is empty or the current char doesn't match the expected closing char, return false
      if (char !== parenthesesMap.get(stack[stack.length - 1])) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return !stack.length;
};

// Linear time and space
const s = "()[]{}";
console.log(isValid(s));

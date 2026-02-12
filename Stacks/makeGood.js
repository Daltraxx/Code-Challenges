const makeGood = (s) => {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const lastChar = stack[stack.length - 1];
    if (
      lastChar &&
      Math.abs(char.charCodeAt(0) - lastChar.charCodeAt(0)) === 32
    ) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join('');
};

// Time Complexity: O(n) where n is the length of the input string s
// Space Complexity: O(n) in the worst case when no characters are removed and all characters are added to the stack

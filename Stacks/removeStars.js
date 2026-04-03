const removeStars = (s) => {
  const stack = [];
  for (let char of s) {
    if (char === "*") {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
};

// Time complexity: O(n), where n is the length of the input string s.
// We traverse the string once, and each character is processed in constant time.
// Space complexity: O(n) in the worst case,
// if there are no '*' characters in the string.

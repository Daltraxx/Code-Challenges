const decodeString = (s) => {
  const stack = [];
  let currStr = "";
  let currNum = 0;
  for (const char of s) {
    if (char === "[") {
      stack.push([currStr, currNum]);
      currStr = "";
      currNum = 0;
    } else if (char === "]") {
      let [str, num] = stack.pop();
      currStr = str + currStr.repeat(num);
    } else if (!isNaN(char)) {
      currNum = currNum * 10 + +char;
    } else {
      currStr += char;
    }
  }

  return currStr;
};

// Time Complexity: O(n * k) where n is the length of the string 
// and k is the maximum number of times a substring can be repeated
// Space Complexity: O(n) where n is the length of the string
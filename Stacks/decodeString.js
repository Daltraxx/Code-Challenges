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
      const original = currStr;
      for (let i = 1; i < num; i++) {
        currStr += original
      }
      currStr = str + currStr;
    } else if (Number.isFinite(+char)) {
      currNum = currNum * 10 + +char;
    } else {
      currStr += char;
    }
  }

  return currStr;
};
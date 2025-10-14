const letterCombinations = (digits) => {
  let oneCount = 0;
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === '1') oneCount++;
  }

  const n = digits.length - oneCount;

  const numToLetterMap = new Map([
    ['1', []],
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'x', 'y', 'z']]
  ]);

  const combinations = [];

  const backtrack = (curr, i) => {
    if (curr.length === n) {
      combinations.push(curr);
      return;
    }

    const num = digits[i];
    if (num === '1') {
      backtrack(curr, i + 1);
      return;
    }

    const letters = numToLetterMap.get(num);
    for (let letter of letters) {
      curr += letter;
      backtrack(curr, i + 1);
      curr = curr.slice(0, -1);
    }
  }

  backtrack('', 0);
  return combinations;
}

const digits = "123";
console.log(letterCombinations(digits));
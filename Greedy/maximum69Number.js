const maximum69Number = (num) => {
  const digits = String(num).split("");
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === "6") {
      digits[i] = "9";
      break;
    }
  }

  return Number(digits.join(""));
};

// Time Complexity: O(n) where n is the number of digits in the input number
// Space Complexity: O(n) where n is the number of digits in the input number

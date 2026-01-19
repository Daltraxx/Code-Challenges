const reversePrefix = (word, ch) => {
  const wordArr = word.split("");
  let left = 0;
  for (let right = 0; right < word.length; right++) {
    if (word[right] === ch) {
      while (left < right) {
        [wordArr[left], wordArr[right]] = [wordArr[right], wordArr[left]];
        left++;
        right--;
      }
      return wordArr.join("");
    }
  }
  return word;
};

// Time: O(n) where n is the length of the word
// Space: O(n) for the array to hold the characters
console.log(reversePrefix("abcdefd", "d")); // "dcbaefd"
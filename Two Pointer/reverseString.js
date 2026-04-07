const reverseString = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
};

// Time complexity: O(n), where n is the length of the input array.
// We need to traverse half of the array to reverse it.
// Space complexity: O(1)
/*Given two strings s and t, return true if they are equal when both are typed into empty text editors. 
'#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.*/

const backspaceCompare = (s, t) => {
  let i = s.length - 1;
  let j = t.length - 1;
  let skipsS = 0;
  let skipsT = 0;

  while (i >= 0 || j >= 0) {
    // Find next valid character in s
    while (i >= 0) {
      if (s[i] === "#") {
        skipsS++;
        i--;
      } else if (skipsS > 0) {
        skipsS--;
        i--;
      } else break;
    }

    // Find next valid character in t
    while (j >= 0) {
      if (t[j] === "#") {
        skipsT++;
        j--;
      } else if (skipsT > 0) {
        skipsT--;
        j--;
      } else break;
    }

    // Compare next valid characters
    // (also handles cases where one or both pointers are negative - okay in JS)
    if (s[i] !== t[j]) {
      return false;
    }

    i--;
    j--;
  }

  return true;
};

// Time complexity: O(n + m), where n and m are the lengths of s and t respectively.
// Space complexity: O(1), as we are using only a constant amount of extra space.

const s = "ab##",
  t = "c#d#";
console.log(backspaceCompare(s, t));

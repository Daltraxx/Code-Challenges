/*Given two strings s and t, return true if they are equal when both are typed into empty text editors. 
'#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.*/

const backspaceCompare = (s, t) => {
  let i = s.length - 1,
    j = t.length - 1;
  let skipS = 0,
    skipT = 0;

  //iterate through strings in reverse
  while (i >= 0 || j >= 0) {
    //find valid character
    while (i >= 0) {
      if (s[i] === "#") {
        skipS++;
        i--;
      } else if (skipS > 0) {
        skipS--;
        i--;
      } else break;
    }

    //find valid character
    while (j >= 0) {
      if (t[j] === "#") {
        skipT++;
        j--;
      } else if (skipT > 0) {
        skipT--;
        j--;
      } else break;
    }

    //compare valid characters
    if (s[i] !== t[j]) {
      return false;
    }

    //move on to finding next valid character
    i--;
    j--;
  }

  return true;
};

const s = "ab##",
  t = "c#d#";
console.log(backspaceCompare(s, t));

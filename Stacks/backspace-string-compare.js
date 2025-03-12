/*Given two strings s and t, return true if they are equal when both are typed into empty text editors. 
'#' means a backspace character.

For example, given s = "ab#c" and t = "ad#c", return true. 
Because of the backspace, the strings are both equal to "ac".*/

const backspaceCompare = (s, t) => {
    const getText = (str) => {
        const stack = [];
        for (let char of str) {
            if (char === '#') {
                //could throw error in other languages if stack is empty
                stack.pop();
            } else {
                stack.push(char);
            }
        }

        return stack.join('');
    }

    return getText(s) === getText(t);
}

//linear time (actually O(n + m)) and space

const s = "a#c", t = "b";
console.log(backspaceCompare(s, t));
/*You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

If the string's length is odd, return the middle character.
If the string's length is even, return the middle 2 characters.*/

function getMiddle(s) {
    const n = s.length;

    if (n % 2 === 0) {
        const firstMiddle = (n / 2) - 1;
        return s.slice(firstMiddle, firstMiddle + 2);
    }
        
    return s[Math.floor(n / 2)];
}
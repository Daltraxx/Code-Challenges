/*Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.*/

const reverseOnlyLetters = (s) => {
    let reversedString = "";

    const regEx =  /^[a-zA-Z]$/;

    let right = s.length - 1;
    for (let left = 0; left < s.length; left++) {
        if (regEx.test(s[left])) {
            while (!regEx.test(s[right])) {
                right--;
            }
            reversedString += s[right];
            right--;
        } else {
            reversedString += s[left];
        }
    }

    return reversedString;
}

//Linear time and space complexity

const s = "?6C40E";
console.log(reverseOnlyLetters(s));


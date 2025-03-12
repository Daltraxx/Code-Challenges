/*You are given a string s and a robot that currently holds an empty string t. Apply one of the following operations until s and t are both empty:

Remove the first character of a string s and give it to the robot. The robot will append this character to the string t.
Remove the last character of a string t and give it to the robot. The robot will write this character on paper.
Return the lexicographically smallest string that can be written on the paper.*/

const robotWithString = (s) => {
    const charCounts = new Array(26).fill(0);
    const t = [];
    let res = '';
    
    for (let char of s) {
        charCounts[char.charCodeAt(0) - 97]++;
    }

    for (let char of s) {
        charCounts[char.charCodeAt(0) - 97]--;
        t.push(char);
        while (t.length) {
            let find = false;
            for (let i = 0; i < 26; i++) {
                let currChar = String.fromCharCode(i + 97);
                if (charCounts[i] > 0 && currChar < t[t.length - 1]) {
                    find = true;
                    break;
                }
            }

            if (find) {
                break;
            } else {
                res += t.pop();
            }
        }
        
    }
    
    return res;

}

const s = "bdda";
console.log(robotWithString(s));
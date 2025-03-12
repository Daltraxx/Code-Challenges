/*Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
You can use each character in text at most once. Return the maximum number of instances that can be formed.
- text consists of lower case English letters only.*/

const maxNumberOfBalloons = (text) => {
    const targetText = 'balloon';
    const targetTextLetterMap = new Array(26).fill(0);
    for (let char of targetText) {
        targetTextLetterMap[char.charCodeAt(0) - 97] += 1;
    }

    const letterCount = new Array(26).fill(0);
    for (let char of text) {
        letterCount[char.charCodeAt(0) - 97] += 1;
    }

    let ans = 0;

    while (true) {
        for (let i = 0; i < targetTextLetterMap.length; i++) {
            if (targetTextLetterMap[i] !== 0) {
                letterCount[i] -= targetTextLetterMap[i];
                if (letterCount[i] < 0) {
                    return ans;
                }
            }
        }
        ans++;
    }
}

//Linear time and constant space

const maxNumberOfBalloonsMinimumPotential = (text) => {
    const targetText = 'balloon';
    const targetTextLetterMap = new Array(26).fill(0);
    for (let char of targetText) {
        targetTextLetterMap[char.charCodeAt(0) - 97] += 1;
    }

    const letterCount = new Array(26).fill(0);
    for (let char of text) {
        letterCount[char.charCodeAt(0) - 97] += 1;
    }

    let ans = Number.MAX_VALUE;
    for (let i = 0; i < 26; i++) {
        //do not divide by zero
        if (targetTextLetterMap[i] > 0) {
            ans = Math.min(ans, Math.floor(letterCount[i] / targetTextLetterMap[i]));
        }
    }

    return ans;
}

const text = "nlaebolko";
console.log(maxNumberOfBalloonsMinimumPotential(text));
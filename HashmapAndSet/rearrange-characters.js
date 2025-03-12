/*You are given two 0-indexed strings s and target. You can take some letters from s and rearrange them to form new strings.

Return the maximum number of copies of target that can be formed by taking letters from s and rearranging them.*/

const rearrangeCharacters = (s, target) => {
    const targetTextLetterMap = new Array(26).fill(0);
    for (let char of target) {
        targetTextLetterMap[char.charCodeAt(0) - 97] += 1;
    }

    const sLetterCount = new Array(26).fill(0);
    for (let char of s) {
        sLetterCount[char.charCodeAt(0) - 97] += 1;
    }

    let ans = 0;

    while (true) {
        for (let i = 0; i < targetTextLetterMap.length; i++) {
            if (targetTextLetterMap[i] !== 0) {
                sLetterCount[i] -= targetTextLetterMap[i];
                if (sLetterCount[i] < 0) {
                    return ans;
                }
            }
        }
        ans++;
    }
}

//Linear time and constant space

const rearrangeCharactersMinimumPotential = (s, target) => {
    const targetTextLetterMap = new Array(26).fill(0);
    for (let char of target) {
        targetTextLetterMap[char.charCodeAt(0) - 97] += 1;
    }

    const sLetterCount = new Array(26).fill(0);
    for (let char of s) {
        sLetterCount[char.charCodeAt(0) - 97] += 1;
    }

    let ans = Number.MAX_VALUE;

    for (let i = 0; i < 26; i++) {
        //do not divide by zero
        if (targetTextLetterMap[i] > 0) {
            ans = Math.min(ans, Math.floor(sLetterCount[i] / targetTextLetterMap[i]));
        }
    }

    return ans;
}

const s = "ilovecodingonleetcode", target = "code";
console.log(rearrangeCharacters(s, target));
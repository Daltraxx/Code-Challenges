function duplicateCount(text) {
    const charCounts = new Map();
    for (let char of text) {
        char = char.toLowerCase();
        charCounts.set(char, charCounts.get(char) + 1 || 1);
    }

    let duplicateChars = 0;
    let charCountsValues = charCounts.values();
    for (let count of charCountsValues) {
        if (count > 1) duplicateChars++;
    }

    return duplicateChars;
}

const text = "aabbcde";
console.log(duplicateCount(text));
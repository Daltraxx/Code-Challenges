function firstDup(s) {
    const appearances = new Map();
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (!appearances.has(char)) appearances.set(char, []);
        appearances.get(char).push(i);
    }

    for (let [char, indices] of appearances) {
        if (indices.length > 1) return char;
    }
}

const s = 'tweet';
console.log(firstDup(s));
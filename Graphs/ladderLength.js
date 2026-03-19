/*A transformation sequence from word beginWord to word endWord using a dictionary wordList 
is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:
    Every adjacent pair of words differs by a single letter.
    Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
    sk == endWord

Given two words, beginWord and endWord, and a dictionary wordList, 
return the number of words in the shortest transformation sequence from beginWord to endWord, 
or 0 if no such sequence exists.*/

const ladderLength = (beginWord, endWord, wordList) => {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) {
        return 0;
    }
    
    //in case wordList contains beginWord
    wordSet.delete(beginWord);

    let queue = [beginWord];
    let transformationCount = 1;

    while (queue.length) {
        const nextQueue = [];

        for (let word of queue) {
            if (word === endWord) {
                return transformationCount;
            }

            for (let neighbor of getNeighbors(word)) {
                nextQueue.push(neighbor);
            }
        }

        transformationCount++;
        queue = nextQueue;
    }

    return 0;

    function getNeighbors(word) {
        const neighbors = [];

        for (let i = 0; i < word.length; i++) {
            let letterCode = word.charCodeAt(i);

            for (let shift = 1; shift < 26; shift++) {
                let newLetterCode = letterCode + shift;

                if (newLetterCode > 122) {
                    newLetterCode = newLetterCode - 122 + 96;
                }

                const newWord = word.slice(0, i) + String.fromCharCode(newLetterCode) + word.slice(i + 1);
                if (wordSet.has(newWord)) {
                    wordSet.delete(newWord);
                    neighbors.push(newWord);
                }
            } 
        }

        return neighbors;
    }
}

const ladderLengthBidirectional = (beginWord, endWord, wordList) => {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) {
        return 0;
    }
    
    let beginSet = new Set([beginWord]);
    let endSet = new Set([endWord]);

    let sequenceCount = 1;

    
    while (beginSet.size && endSet.size) {
        if (beginSet.size > endSet.size) {
            [beginSet, endSet] = [endSet, beginSet];
        }

        let newBeginSet = new Set();
        for (let word of beginSet) {
            for (let neighbor of getNeighbors(word)) {
                if (endSet.has(neighbor)) {
                    return sequenceCount + 1;
                } else if (wordSet.has(neighbor)) {
                    wordSet.delete(neighbor);
                    newBeginSet.add(neighbor);
                }
            }
        }
        beginSet = newBeginSet;
        sequenceCount++;
    }

    return 0;

    //helper function to get neighbors of each word/node
    function getNeighbors(word) {
        const neighbors = [];

        for (let i = 0; i < word.length; i++) {
            let letterCode = word.charCodeAt(i);

            for (let shift = 1; shift < 26; shift++) {
                let newLetterCode = letterCode + shift;

                if (newLetterCode > 122) {
                    newLetterCode = newLetterCode - 122 + 96;
                }

                const newWord = word.slice(0, i) + String.fromCharCode(newLetterCode) + word.slice(i + 1);
                
                neighbors.push(newWord);
                
            } 
        }

        return neighbors;
    }
}

const beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"];

console.log(ladderLength(beginWord, endWord, wordList));
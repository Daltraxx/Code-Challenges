const ladderLength = (beginWord, endWord, wordList) => {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) {
    return 0;
  }

  let queue = [beginWord];
  let length = 1;

  while (queue.length) {
    const nextQueue = [];

    for (let word of queue) {
      if (word === endWord) {
        return length;
      }

      for (let neighbor of getNeighbors(word)) {
        nextQueue.push(neighbor);
      }
    }

    length++;
    queue = nextQueue;
  }

  return 0;

  function getNeighbors(word) {
    const neighbors = [];
    const letters = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < word.length; i++) {
      const originalChar = word[i];
      for (const letter of letters) {
        if (letter === originalChar) continue;
        const newWord = word.slice(0, i) + letter + word.slice(i + 1);
        if (wordSet.has(newWord)) {
          wordSet.delete(newWord);
          neighbors.push(newWord);
        }
      }
    }

    return neighbors;
  }
};
// Time Complexity: O(M*N) where M is the length of each word and N is the
// number of words in the word list. In the worst case, we might have to check
// all possible transformations for each word in the list.
// Space Complexity: O(N) for the queue and the word set, where N is the number
// of words in the word list.

const ladderLengthBidirectional = (beginWord, endWord, wordList) => {
  const n = beginWord.length;
  const allowedWords = new Set(wordList);
  if (!allowedWords.has(endWord)) {
    return 0;
  }

  let currSet = new Set([beginWord]);
  let otherSet = new Set([endWord]);

  let length = 2;

  while (currSet.size && otherSet.size) {
    if (currSet.size > otherSet.size) {
      [currSet, otherSet] = [otherSet, currSet];
    }

    let nextLevel = new Set();
    for (let word of currSet) {
      for (let i = 0; i < n; i++) {
        for (const letter of "abcdefghijklmnopqrstuvwxyz") {
          if (letter === word[i]) continue;
          const newWord = word.slice(0, i) + letter + word.slice(i + 1);
          if (otherSet.has(newWord)) {
            return length;
          }
          if (allowedWords.has(newWord)) {
            allowedWords.delete(newWord);
            nextLevel.add(newWord);
          }
        }
      }
    }
    currSet = nextLevel;
    length++;
  }

  return 0;
};

// Time Complexity: O(M*N) where M is the length of each word and N is the
// number of words in the word list. In the worst case, we might have to check
// all possible transformations for each word in the list.
// Space Complexity: O(N) for the sets, where N is the number of words in the
// word list.

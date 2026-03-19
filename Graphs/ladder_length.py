from collections import deque
from typing import List


class LadderLength:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        n = len(beginWord)
        wordSet = set(wordList)
        if endWord not in wordSet:
            return 0
        wordSet.add(beginWord)
        queue = deque([beginWord])
        count = 1
        while queue:
            for _ in range(len(queue)):
                word = queue.popleft()
                if word == endWord:
                    return count
                wordChars = list(word)
                for i in range(n):
                    original_char = wordChars[i]
                    for new_char in "abcdefghijklmnopqrstuvwxyz":
                        if new_char == original_char:
                            continue
                        wordChars[i] = new_char
                        new_word = "".join(wordChars)
                        if new_word in wordSet:
                            wordSet.remove(new_word)
                            queue.append(new_word)
                        # Reset
                        wordChars[i] = original_char

            count += 1

        return 0

# Time complexity: O(n * m * 26) where n is the number of words in the word list,
# m is the length of each word, and 26 is the number of possible character changes
# (since we can change each character to any of the 26 letters).
# In the worst case, we may have to visit all words in the word list, and
# for each word, we check all m characters and try changing it to 26 different letters.
# Space complexity: O(n) for the queue and the word set, where n is the
# number of words in the word list. In the worst case, we may have to store all words in the queue and the set.
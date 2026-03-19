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
                    char = wordChars[i]
                    for change in range(1, 27):
                        char_code = 97 + (ord(char) - 97 + change) % 26
                        wordChars[i] = chr(char_code)
                        new_word = "".join(wordChars)
                        if new_word in wordSet:
                            wordSet.remove(new_word)
                            queue.append(new_word)
                        # Reset
                        wordChars[i] = char

            count += 1

        return 0

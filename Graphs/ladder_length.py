from collections import deque
from typing import List


class LadderLength:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        n = len(beginWord)
        allowed_words = set(wordList)
        if endWord not in allowed_words:
            return 0
        
        queue = deque([beginWord])
        length = 1
        while queue:
            for _ in range(len(queue)):
                word = queue.popleft()
                if word == endWord:
                    return length
                wordChars = list(word)
                for i in range(n):
                    original_char = wordChars[i]
                    for new_char in "abcdefghijklmnopqrstuvwxyz":
                        if new_char == original_char:
                            continue
                        wordChars[i] = new_char
                        new_word = "".join(wordChars)
                        if new_word in allowed_words:
                            allowed_words.remove(new_word)
                            queue.append(new_word)
                        # Reset the character back to the original for the next iteration
                        wordChars[i] = original_char

            length += 1

        return 0

    # Time complexity: O(n * m * 26) where n is the number of words in the word list,
    # m is the length of each word, and 26 is the number of possible character changes
    # (since we can change each character to any of the 26 letters).
    # In the worst case, we may have to visit all words in the word list, and
    # for each word, we check all m characters and try changing it to 26 different letters.
    # Space complexity: O(n) for the queue and the word set, where n is the
    # number of words in the word list. In the worst case, we may have to store all words in the queue and the set.

    def ladderLengthBidirectionalBFS(
        self, beginWord: str, endWord: str, wordList: List[str]
    ) -> int:
        n = len(beginWord)
        allowed_words = set(wordList)

        if endWord not in allowed_words:
            return 0
        
        curr_set = {beginWord}
        other_set = {endWord}
        length = 2
        letters = "abcdefghijklmnopqrstuvwxyz"

        while curr_set and other_set:
            # Always expand the smaller set to optimize the search and minimize branching.
            if len(curr_set) > len(other_set):
                curr_set, other_set = other_set, curr_set

            next_level = set()
            for word in curr_set:
                chars = list(word)
                for i in range(n):
                    original = chars[i]
                    for letter in letters:
                        if letter == original:
                            continue
                        chars[i] = letter
                        new_word = "".join(chars)

                        # If the new word is in the opposite set, we have found a connection 
                        # and can return the current length of the transformation sequence.
                        if new_word in other_set:
                            return length

                        if new_word in allowed_words:
                            allowed_words.remove(new_word)
                            next_level.add(new_word)

                    # Reset the character back to the original for the next iteration
                    chars[i] = original

            curr_set = next_level
            length += 1

        return 0
    
    # Time complexity: O(n * m * 26) where n is the number of words in the word list,
    # m is the length of each word, and 26 is the number of possible character changes.
    # In the worst case, we may have to visit all words in the word list,
    # and for each word, we check all m characters and try changing it to 26 different letters.
    # In practice, the bidirectional BFS can significantly reduce the number of words we need to visit, 
    # especially if the beginWord and endWord are far apart in the transformation sequence, which can lead 
    # to faster convergence compared to a standard BFS.
    # Space complexity: O(n) for the sets used in the bidirectional BFS, where n is the number of words in the word list.
    # In the worst case, we may have to store all words in the sets. However
    # since we are using bidirectional BFS, the number of words stored in each set is likely to be less than n/2, 
    # which can help reduce space usage compared to a standard BFS.
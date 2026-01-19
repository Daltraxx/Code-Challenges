class ReversePrefix:
  def reversePrefix(self, word: str, ch: str) -> str:
    left = 0
    wordList = list(word)
    for right in range(len(word)):
      if word[right] == ch:
        while left < right:
          wordList[left], wordList[right] = wordList[right], wordList[left]
          left += 1
          right -= 1
        return "".join(wordList)
      
    return word

# Time complexity: O(n) where n is the length of the word.
# Space complexity: O(n) for the list conversion of the string.
word = "abcdefd"
ch = "d"

print(ReversePrefix().reversePrefix(word, ch))
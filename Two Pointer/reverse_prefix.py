class ReversePrefix:
  def reversePrefix(self, word: str, ch: str) -> str:
    left = 0
    right = word.find(ch) # -1 if not found
    wordList = list(word)
    while left < right:
      wordList[left], wordList[right] = wordList[right], wordList[left]
      left += 1
      right -= 1
    
    return "".join(wordList)

# Time complexity: O(n) where n is the length of the word.
# Space complexity: O(n) for the list conversion of the string.
word = "abcdefd"
ch = "z"

print(ReversePrefix().reversePrefix(word, ch))
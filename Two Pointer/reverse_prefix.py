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

word = "abcdefd"
ch = "z"

print(ReversePrefix().reversePrefix(word, ch))
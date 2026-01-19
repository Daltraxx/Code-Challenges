public class ReversePrefix {
  public String reversePrefix(String word, char ch) {
    char[] wordArr = word.toCharArray();
    int left = 0;
    for (int right = 0; right < word.length(); right++) {
      if (word.charAt(right) == ch) {
        while (left < right) {
          char temp = wordArr[left];
          wordArr[left] = wordArr[right];
          wordArr[right] = temp;
          left++;
          right--;
        }
        return new String(wordArr);
      }
    }
    return word;
  }
}

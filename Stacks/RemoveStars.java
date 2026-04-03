package Stacks;

public class RemoveStars {
  public String removeStars(String s) {
    // We can use a StringBuilder to efficiently build the resulting string
    // just like we would usea stack.
    StringBuilder sb = new StringBuilder(s.length());
    for (int i = 0; i < s.length(); i++) {
      char c = s.charAt(i);
      if (c == '*') {
        sb.deleteCharAt(sb.length() - 1);
      } else {
        sb.append(c);
      }
    }
    return sb.toString();
  }

  // Time complexity: O(n) where n is the length of the input string s,
  // as we need to traverse the string once to process all characters.
  // Space complexity: O(n) in the worst case
  // where there are no '*' characters in the string.
}

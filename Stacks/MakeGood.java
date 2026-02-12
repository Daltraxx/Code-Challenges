package Stacks;

public class MakeGood {
  public String makeGood(String s) {
    StringBuilder goodString = new StringBuilder();
    for (int i = 0; i < s.length(); i++) {
      char letter = s.charAt(i);
      int currLength = goodString.length();
      if (currLength > 0 && isBadPair(goodString.charAt(currLength - 1), letter)) {
        goodString.deleteCharAt(currLength - 1);
      } else {
        goodString.append(letter);
      }
    }

    return goodString.toString();
  }

  private boolean isBadPair(char a, char b) {
    return a != b && Character.toLowerCase(a) == Character.toLowerCase(b);
  }
}

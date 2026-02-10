package Stacks;

public class RemoveDuplicates {
  public String removeDuplicates(String s) {
    StringBuilder noAdjacentDups = new StringBuilder();
    for (int i = 0; i < s.length(); i++) {
      char character = s.charAt(i);
      if (noAdjacentDups.length() > 0 && noAdjacentDups.charAt(noAdjacentDups.length() - 1) == character) {
        noAdjacentDups.deleteCharAt(noAdjacentDups.length() - 1);
      } else {
        noAdjacentDups.append(character);
      }
    }
    return noAdjacentDups.toString();
  }
}

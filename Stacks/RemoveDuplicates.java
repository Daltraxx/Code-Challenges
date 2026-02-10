package Stacks;

public class RemoveDuplicates {
  public String removeDuplicates(String s) {
    // Stringbuilder can act as a stack, we can append characters and delete the last character when we find a duplicate
    StringBuilder noAdjacentDups = new StringBuilder();
    for (int i = 0; i < s.length(); i++) {
      char character = s.charAt(i);
      int noAdjacentDupsLength = noAdjacentDups.length();
      if (noAdjacentDupsLength > 0 && noAdjacentDups.charAt(noAdjacentDupsLength - 1) == character) {
        noAdjacentDups.deleteCharAt(noAdjacentDupsLength - 1);
      } else {
        noAdjacentDups.append(character);
      }
    }
    return noAdjacentDups.toString();
  }
}


// Time Complexity: O(n) - We traverse the string once, and each operation on the StringBuilder is O(1).
// Space Complexity: O(n) - In the worst case if there are no adjacent duplicates
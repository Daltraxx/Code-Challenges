package Stacks;

import java.util.ArrayDeque;
import java.util.Deque;
import java.util.HashMap;
import java.util.Map;

public class IsValid {
  public boolean isValid(String s) {
    Map<Character, Character> pairings = new HashMap<>();
    pairings.put('(', ')');
    pairings.put('[', ']');
    pairings.put('{', '}');

    Deque<Character> stack = new ArrayDeque<>();

    for (int i = 0; i < s.length(); i++) {
      char character = s.charAt(i);
      if (pairings.containsKey(character)) {
        // If it's an opening character, push it onto the stack
        stack.push(character);
      } else {
        // If it's a closing character, check if it matches the last opening character
        if (!stack.isEmpty() && character == pairings.get(stack.peek())) {
          stack.pop();
        } else {
          return false;
        }
      }
    }

    return stack.isEmpty();
  }
}

// Time Complexity: O(n) - We traverse the string once, and each stack operation is O(1).
// Space Complexity: O(n) - In the worst case, we could have all opening characters
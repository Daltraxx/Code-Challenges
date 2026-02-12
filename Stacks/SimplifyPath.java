package Stacks;

import java.util.ArrayDeque;
import java.util.Deque;

public class SimplifyPath {
  public String simplifyPath(String path) {
    Deque<String> stack = new ArrayDeque<>();
    String[] segments = path.split("/");
    for (String segment : segments) {
      if (segment.isEmpty() || segment.equals(".")) {
        continue;
      } else if (segment.equals("..")) {
        if (!stack.isEmpty())
          stack.removeLast();
      } else {
        stack.add(segment);
      }
    }

    StringBuilder simplifiedPath = new StringBuilder();
    for (String segment : stack) {
      simplifiedPath.append("/");
      simplifiedPath.append(segment);
    }

    return simplifiedPath.length() > 0 ? simplifiedPath.toString() : "/";
  }
}

// Time complexity O(n) where n is the length of the input path
// Space complexity O(n) in the worst case when all segments are added to the
// stack
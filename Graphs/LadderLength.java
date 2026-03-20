import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class LadderLength {
    Set<String> wordSet;

    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        wordSet = new HashSet<>(wordList);

        if (!wordSet.contains(endWord)) {
            return 0;
        }

        Deque<String> queue = new ArrayDeque<>();
        queue.add(beginWord);

        int sequenceCount = 1;

        while (!queue.isEmpty()) {
            int levelSize = queue.size();

            for (int i = 0; i < levelSize; i++) {
                String word = queue.remove();

                if (word.equals(endWord)) {
                    return sequenceCount;
                }

                for (String neighbor : getNeighbors(word)) {
                    queue.add(neighbor);
                }
            }

            sequenceCount++;
        }

        return 0;
    }

    public List<String> getNeighbors(String word) {
        char[] chars = word.toCharArray();
        List<String> neighbors = new ArrayList<>();

        for (int i = 0; i < chars.length; i++) {
            char original = chars[i];

            for (char letter = 'a'; letter <= 'z'; letter++) {
                if (letter == original)
                    continue;

                chars[i] = letter;
                String adjacentWord = new String(chars);

                if (wordSet.contains(adjacentWord)) {
                    wordSet.remove(adjacentWord);
                    neighbors.add(adjacentWord);
                }
            }

            // Keep original word intact for next iterations
            chars[i] = original;
        }

        return neighbors;
    }
}

// Time Complexity: O(M*N) where M is the length of each word and N is the
// number of words in the word list. In the worst case, we might have to check
// all possible transformations for each word in the list.
// Space Complexity: O(N) for the queue and the word set, where N is the number
// of words in the word list.
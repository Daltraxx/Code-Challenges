import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/*A transformation sequence from word beginWord to word endWord using a dictionary wordList 
is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:
    Every adjacent pair of words differs by a single letter.
    Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
    sk == endWord

Given two words, beginWord and endWord, and a dictionary wordList, 
return the number of words in the shortest transformation sequence from beginWord to endWord, 
or 0 if no such sequence exists.*/

class WordLadder {
    Set<String> wordSet;

    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        wordSet = new HashSet<>(wordList);

        if (!wordSet.contains(endWord)) {
            return 0;
        }

        //in case wordList contains beginWord
        wordSet.remove(beginWord);

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
                    wordSet.remove(neighbor);
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
                chars[i] = letter;
                String adjacentWord = new String(chars);

                if (wordSet.contains(adjacentWord)) {
                    neighbors.add(adjacentWord);
                }
            }

            //keep original word intact for next iterations
            chars[i] = original;
        }

        return neighbors;
    }
}
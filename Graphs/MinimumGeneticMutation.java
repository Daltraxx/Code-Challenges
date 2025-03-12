import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Deque;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/*A gene string can be represented by an 8-character long string, 
with choices from 'A', 'C', 'G', and 'T'.

Suppose we need to investigate a mutation from a gene string startGene to a gene string endGene where one mutation is defined as one single character changed in the gene string.

For example, "AACCGGTT" --> "AACCGGTA" is one mutation.
There is also a gene bank bank that records all the valid gene mutations. 
A gene must be in bank to make it a valid gene string.

Given the two gene strings startGene and endGene and the gene bank bank, 
return the minimum number of mutations needed to mutate from startGene to endGene. 
If there is no such a mutation, return -1.

Note that the starting point is assumed to be valid, so it might not be included in the bank.*/

class MinimumGeneticMutation {
    public int minMutation(String startGene, String endGene, String[] bank) {
        Set<String> seen = new HashSet<>();
        seen.add(startGene);

        Deque<String> queue = new ArrayDeque<>();
        queue.add(startGene);
        int mutationCount = 0;

        while (!queue.isEmpty()) {
            int levelSize = queue.size();
            for (int i = 0; i < levelSize; i++) {
                String gene = queue.remove();

                if (gene.equals(endGene)) {
                    return mutationCount;
                }

                for (String neighbor : getNeighbors(gene)) {
                    if (!seen.contains(neighbor) && Arrays.asList(bank).contains(neighbor)) {
                        seen.add(neighbor);
                        queue.add(neighbor);
                    }
                }

            }

            mutationCount++;
        }

        return -1;
    }
    
    public List<String> getNeighbors(String gene) {
        char[] bases = {'A', 'C', 'G', 'T'};  
        List<String> neighbors = new ArrayList<>();

        for (int i = 0; i < gene.length(); i++) {
            for (char base : bases) {
                if (base != gene.charAt(i)) {
                    neighbors.add(gene.substring(0, i) + base + gene.substring(i + 1));
                }
            }
        }

        return neighbors;
    }
}
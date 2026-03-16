import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Deque;
import java.util.HashSet;

class MinMutation {
    public int minMutation(String startGene, String endGene, String[] bank) {
        HashSet<String> bankSet = new HashSet<>(Arrays.asList(bank));
        if (!bankSet.contains(endGene)) {
            return -1;
        }

        char[] bases = { 'A', 'C', 'G', 'T' };

        // Can use the bankSet to track visited genes as well,
        // since we remove genes from it once they are visited.
        if (bankSet.contains(startGene)) {
            bankSet.remove(startGene);
        }
        Deque<String> queue = new ArrayDeque<>();
        queue.add(startGene);
        int mutations = 0;

        while (!queue.isEmpty()) {
            int queueSize = queue.size();
            for (int i = 0; i < queueSize; i++) {
                String gene = queue.remove();

                if (gene.equals(endGene)) {
                    return mutations;
                }

                for (int j = 0; j < gene.length(); j++) {
                    for (char base : bases) {
                        if (gene.charAt(j) == base) {
                            continue;
                        }
                        char[] geneArray = gene.toCharArray();
                        geneArray[j] = base;
                        String newGene = new String(geneArray);
                        if (bankSet.contains(newGene)) {
                            bankSet.remove(newGene);
                            queue.add(newGene);
                        }
                    }
                }
            }
            mutations++;
        }

        return -1;
    }
}

// Time Complexity: O(n) where n is the number of genes in the bank,
// since we convert the bank array to a set and may have to visit each gene at
// most once during the BFS.
// Technically, the BFS runs in constant time since the gene length is fixed at
// 8 and there are only 4 possible bases.
// Space Complexity: O(n) for the bankSet and the queue in the worst case where
// we visit all genes in the bank,
// though could also be considered O(1) since the gene length is fixed and there
// are only 4^8 possible genes.

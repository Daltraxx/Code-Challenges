/*Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.
A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).*/

//construct Trie data structure adapted for current problem to deal with number arrays 
//and keep track of frequency so that pairs can be counted
class TrieNode  {
    constructor() {
        this.children = {};
        this.count = 0;

    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(array) {
        let current = this.root;
        for (let num of array) {
            if (!(num in current.children)) {
                current.children[num] = new TrieNode();
            }

            current = current.children[num];
        }

        current.count++;
    }

    search(array) {
        let current = this.root;
        for (let num of array) {
            if (!(num in current.children)) {
                return 0;
            }

            current = current.children[num]
        }

        return current.count;
    }

}

/*Algorithm:
1.Initialize a empty trie my_trie and set count as 0.
2.Insert each row of grid into my_trie.
3.Search for each column col_array in the trie.
4.If the col_array is found in the trie, add the frequency count to the count.
5.Return the answer count.*/
const equalPairs = (grid) => {
    const myTrie = new Trie();
    let count = 0;

    for (let row of grid) {
        myTrie.insert(row);
    }

    for (let c = 0; c < grid.length; c++) {
        const colArray = [];
        for (let r = 0; r < grid.length; r++) {
            colArray[r] = grid[r][c];
        }

        count += myTrie.search(colArray);
    }

    return count;
}

/*Let n×n be the size of grid.

Time complexity: O(n^2)

The length of input rows is fixed to n, the time complexity of building a trie for n rows is O(n^2), 
since we need to traverse each element in the array to insert it into the trie.

The time complexity of search an array of length n is O(n) 
as we need to iterate over the entire array in the worst-case scenario.*/

const grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]];

console.log(equalPairs(grid));
/*Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.
A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).*/

//two methods below (one older, one more recent, both using hashmap)

const equalPairs1 = (grid) => {
    const rowCounter = new Map();
    let count = 0;

    //store frequency of each row in rowCounter hashmap, using string of ints in row separated by dashes as hash key.
    for (let row of grid) {
        let rowHashKey = row.join('-');
        rowCounter.has(rowHashKey) ? rowCounter.set(rowHashKey, rowCounter.get(rowHashKey) + 1) : rowCounter.set(rowHashKey, 1);
    }

    console.log(rowCounter);

    //construct hash string of each column and see if in rowCounter. If so, increment count by that row frequency
    for (let col = 0; col < grid.length; col++) {
        let columnHash = [];
        for (let row = 0; row < grid.length; row++) {
            columnHash.push(grid[row][col]);
        }
        columnHash = columnHash.join('-');
        if (rowCounter.has(columnHash)) count += rowCounter.get(columnHash);
    }


    return count;
}

const equalPairs2 = (grid) => {
    const convertToKey = (row) => {
        let key = '';
        for (let num of row) {
            key += num + ',';
        }

        return key;
    }

    const dict = new Map();
    for (let row of grid) {
        const key = convertToKey(row);
        dict.set(key, (dict.get(key) || 0) + 1);
    }

    let ans = 0;

    for (let col = 0; col < grid.length; col++) {
        let currentCol = [];
        for (let row = 0; row < grid.length; row++) {
            currentCol.push(grid[row][col]);
        }

        let key = convertToKey(currentCol);
        ans += dict.get(key) || 0;
    }

    return ans;
}

/*If the grid has a size of n⋅n, this algorithm has a time complexity of O(n*2) - there are n2 elements 
and each element is iterated over twice initially (once for the row it occupies and once for the column it occupies).*/

/* Space: O(n*2)
We store each row of the grid in the hash map, in the worst-case scenario, row_counter might contains n distinct rows of length n.*/

const grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]];

console.log(equalPairs2(grid));
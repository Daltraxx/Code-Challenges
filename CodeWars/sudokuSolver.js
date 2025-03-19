function getNumsMaps() {
    // const numsRequired = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    // const sectionNumsMissingMap = new Map();
    // const rowNumsMissingMap = new Map();
    // const colNumsMissingMap = new Map();
    // for (let i = 0; i < 9; i++) {
    //     sectionNumsMissingMap.set(i, new Set(numsRequired));
    //     rowNumsMissingMap.set(i, new Set(numsRequired));
    //     colNumsMissingMap.set(i, new Set(numsRequired));
    // }

    // return { sectionNumsMissingMap, rowNumsMissingMap, colNumsMissingMap };
    const sectionNumsMap = new Map();
    const rowNumsMap = new Map();
    const colNumsMap = new Map();
    for (let i = 0; i < 9; i++) {
        sectionNumsMap.set(i, new Set());
        rowNumsMap.set(i, new Set());
        colNumsMap.set(i, new Set());
    }

    return { sectionNumsMap, rowNumsMap, colNumsMap };
}

function getSection(row, col) {
    if (row < 3) {
        if (col < 3) { return 0; } 
        else if (col < 6) { return 1; }
        else { return 2; }
    } else if (row < 6) {
        if (col < 3) { return 3; } 
        else if (col < 6) { return 4; }
        else { return 5; }
    } else {
        if (col < 3) { return 6; } 
        else if (col < 6) { return 7; }
        else { return 8; }
    }
}

function sudoku(puzzle) {
    const getMissingNum = (numSet) => {
        for (let num = 1; num < 10; num++) {
            if (!numSet.has(num)) return num;
        }
    }

    const n = puzzle.length;
    let remainingCells = n * n;
    const { sectionNumsMap, rowNumsMap, colNumsMap } = getNumsMaps();
    let emptyCells = new Set();

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            let section = getSection(row, col);
            let num = puzzle[row][col];
            if (num !== 0) {
                remainingCells--;
                sectionNumsMap.get(section).add(num);
                rowNumsMap.get(row).add(num);
                colNumsMap.get(col).add(num);
            } else {
                emptyCells.add({ section, row, col, possibleNums: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])})
            }
        }
    }

    let toDelete = [];
    while (remainingCells !== 0) {
        for (let emptyCell of emptyCells) {
            const { section, row, col, possibleNums } = emptyCell;
            const sectionNums = sectionNumsMap.get(section);
            const rowNums = rowNumsMap.get(row);
            const colNums = colNumsMap.get(col);
    
            for (let num = 1; num < 10; num++) {
                if (sectionNums.has(num) || rowNums.has(num) || colNums.has(num)) {
                    possibleNums.delete(num);
                }
            }
    
            if (possibleNums.size === 1) {
                remainingCells--;
                const [num] = possibleNums;
                console.log(row, col, num);
                puzzle[row][col] = num;
                sectionNums.add(num);
                rowNums.add(num);
                colNums.add(num);
                toDelete.push(emptyCell);
                continue;
            }
    
            if (sectionNums.size === 8) {
                remainingCells--;
                const num = getMissingNum(sectionNums);
                console.log(row, col, num);
                sectionNums.add(num);
                rowNums.add(num);
                colNums.add(num);
                toDelete.push(emptyCell);
                continue;
            }
            if (rowNums.size === 8) {
                remainingCells--;
                const num = getMissingNum(rowNums);
                console.log(row, col, num);
                sectionNums.add(num);
                rowNums.add(num);
                colNums.add(num);
                toDelete.push(emptyCell);
                continue;
            }
            if (colNums.size === 8) {
                remainingCells--;
                const num = getMissingNum(colNums);
                console.log(row, col, num);
                sectionNums.add(num);
                rowNums.add(num);
                colNums.add(num);
                toDelete.push(emptyCell);
                continue;
            }
        }
    
        for (let emptyCell of toDelete) emptyCells.delete(emptyCell);
        toDelete = [];
    }

    return puzzle;
}

const puzzle = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]];

//printPuzzle(puzzle);

sudoku(puzzle);
//console.log(getSection(7, 0));
printPuzzle(puzzle);



function printPuzzle(puzzle) {
    for (let row = 0; row < puzzle.length; row++) {
        let rowStr = '';
        for (let col = 0; col < 9; col++) {
            rowStr += puzzle[row][col] + '|'
            if (col === 2 || col === 5) {
                rowStr = rowStr.slice(0, rowStr.length - 1) + '#';
            }
        }

        console.log(rowStr);
        if (row === 2 || row === 5) {
            console.log('###################')
        } else {
            console.log('-----#-----#-------');
        }
    }
    console.log('\n');
}

// function getSection(row, col) {
//     //consider only having to build sections object array once
//     const sections = Array.from({ length: 9}, () => ({}));

//     sections.forEach((section, i) => {
//         section.index = i;
//         if (i < 3) section.rowRange = [0, 2];
//         if (i >= 3 && i < 6) section.rowRange = [3, 5];
//         if (i >= 6) section.rowRange = [6, 8];
//         if (i % 3 === 0) section.colRange = [0, 2];
//         if (i % 3 === 1) section.colRange = [3, 5];
//         if (i % 3 === 2) section.colRange = [6, 8];
//     })



//     const sectionIndex = sections.findIndex(section => {
//         const { rowRange, colRange } = section;
        
//         const correctRow = row >= rowRange[0] && row <= rowRange[1];
//         const correctCol = col >= colRange[0] && col <= colRange[1];
        
//         return correctRow && correctCol;
//     })

//     return sectionIndex;
// }
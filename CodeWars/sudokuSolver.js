function getNumsMaps() {
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
    const addNumToMapSets = (num, sets) => {
        sets.forEach((set) => set.add(num));
    }
    const getMissingNum = (numSet) => {
        for (let num = 1; num < 10; num++) {
            if (!numSet.has(num)) return num;
        }
    }

    const n = puzzle.length;
    let remainingCells = 81;
    const { sectionNumsMap, rowNumsMap, colNumsMap } = getNumsMaps();
    let emptyCells = new Set();

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            let section = getSection(row, col);
            let num = puzzle[row][col];
            if (num !== 0) {
                remainingCells--;
                addNumToMapSets(num, [sectionNumsMap.get(section), rowNumsMap.get(row), colNumsMap.get(col)]);
            } else {
                emptyCells.add({ section, row, col, possibleNums: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])})
            }
        }
    }

    let filledCells = [];
    while (remainingCells !== 0) {
        for (let emptyCell of emptyCells) {
            const { section, row, col, possibleNums } = emptyCell;
            const sectionNums = sectionNumsMap.get(section);
            const rowNums = rowNumsMap.get(row);
            const colNums = colNumsMap.get(col);
            const mapSets = [sectionNums, rowNums, colNums];
    
            for (let num = 1; num < 10; num++) {
                if (sectionNums.has(num) || rowNums.has(num) || colNums.has(num)) {
                    possibleNums.delete(num);
                }
            }
    
            //replace below with attemptSolve() function
            if (possibleNums.size === 1) {
                remainingCells--;
                const [num] = possibleNums;
                puzzle[row][col] = num;
                addNumToMapSets(num, mapSets);
                filledCells.push(emptyCell);
                continue;
            }
    
            if (sectionNums.size === 8) {
                remainingCells--;
                const num = getMissingNum(sectionNums);
                addNumToMapSets(num, mapSets);
                filledCells.push(emptyCell);
                continue;
            }
            if (rowNums.size === 8) {
                remainingCells--;
                const num = getMissingNum(rowNums);
                addNumToMapSets(num, mapSets);
                filledCells.push(emptyCell);
                continue;
            }
            if (colNums.size === 8) {
                remainingCells--;
                const num = getMissingNum(colNums);
                addNumToMapSets(num, mapSets);
                filledCells.push(emptyCell);
                continue;
            }
        }
    
        for (let filledCell of filledCells) emptyCells.delete(filledCell);
        filledCells = [];
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
const grid = [
    "                      ",    
    "   +-------+          ",
    "   |      +++---+     ",
    "X--+      +-+   X     "
    ] // true

console.log(line(grid));

function line(grid) {
    const X = 'X',  CORNER = '+', HORIZONTAL = '-', VERTICAL = '|', EMPTY = ' ';

    const height = grid.length;
    const width = grid[0].length;

    const directions = {
        left: [-1, 0],
        right: [1, 0],
        up: [0, -1],
        down: [0, 1]
    }

    const origins = [];
    let pathCharCount = 0;

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            const positionChar = grid[row][col];
            if (positionChar !== EMPTY) pathCharCount++; 
            if (grid[row][col] === X) origins.push([row, col]);
        }
    }

    let seen;
    for (let origin of origins) {
        seen = new Set([origin.toString()]);
        if (findPath(origin)) return true;
    }

    return false;

    // ---------------helper functions

    function findPath(origin) {
        let last;
        let currentRow, currentCol;
        let stepCount = 0;

        while (true) {
            stepCount++;
            if (currentRow === undefined) {
                [currentRow, currentCol] = origin;
            }
            const currentPathChar = grid[currentRow][currentCol];
            const validDirections = getValidDirections(currentPathChar, last);
            const currentPosition = [currentRow, currentCol];
            let newPosition;

            for (let [x, y] of validDirections) {
                const newRow = currentRow + y;
                const newCol = currentCol + x;
                const potentialNewPosition = [newRow, newCol];
                const direction = getDirection(currentPosition, potentialNewPosition);
                if (isValidPosition(currentPathChar, potentialNewPosition, direction)) {
                    if (newPosition) return false;
                    newPosition = potentialNewPosition;
                }
            }

            
            if (!newPosition) return false;
            if (grid[newPosition[0]][newPosition[1]] === X) {
                stepCount++;
                return stepCount === pathCharCount ? true : false;
            }
            
            last = getDirection(currentPosition, newPosition);
            
            [currentRow, currentCol] = newPosition;
            seen.add(newPosition.toString());
        }
    }

    function getValidDirections(currentPathChar, last) {
        switch (currentPathChar) {
            case X:
                return [directions.left, directions.right, directions.up, directions.down];
            case CORNER:
                return last === HORIZONTAL ? [directions.up, directions.down] : [directions.left, directions.right];
            case HORIZONTAL:
                return [directions.left, directions.right];
            case VERTICAL:
                return [directions.up, directions.down];
        }
    }

    function isValidPosition(currentPathChar, newPosition, direction) {
        const [newRow, newCol] = newPosition;
        if (isOutOfBounds(newRow, newCol)) return false;
        if (seen.has(([newRow, newCol]).toString())) return false;
        
        const newPathChar = grid[newRow][newCol];

        if (newPathChar === CORNER || newPathChar === X) {
            return true;
        } else if (currentPathChar === X || currentPathChar === CORNER) {
            return direction === HORIZONTAL ? newPathChar === HORIZONTAL : newPathChar === VERTICAL;
        } else if (currentPathChar === HORIZONTAL) {
            return newPathChar === HORIZONTAL;
        } else {
            return newPathChar === VERTICAL;
        }
    }

    function isOutOfBounds(row, col) {
        return row < 0 || row >= height || col < 0 || col >= width;
    }

    function getDirection(currentPosition, newPosition) {
        if (newPosition[0] - 1 === currentPosition[0] || newPosition[0] + 1 === currentPosition[0]) {
            return VERTICAL;
        } else {
            return HORIZONTAL;
        }
    }
}


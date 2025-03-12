/*We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, 
and the sign represents its direction (positive meaning right, negative meaning left). 
Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. 
If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.*/

const asteroidCollision = (asteroids) => {
    const stack = [];
    let pointer = 0;

    const destroy = (left, right) => {
        if ((left * right > 0) || (left < 0 && right > 0)) {
            //going same direction OR left going left and right going right -- won't meet
            return "neither";
        } else {
            //asteroids will collide
            if (left + right === 0) {
                return "both";
            } else if (left > Math.abs(right)) {
                return "right";
            } else {
                return "left";
            }
        }
    }

    while (pointer < asteroids.length) {
        if (stack.length) {
            switch(destroy(stack[stack.length - 1], asteroids[pointer])) {
                case "neither":
                    stack.push(asteroids[pointer]);
                    pointer++;
                    break;
                case "both":
                    stack.pop();
                    pointer++;
                    break;
                case "left":
                    stack.pop();
                    break;
                case "right":
                    pointer++;
                    break;
            }
        } else {
            stack.push(asteroids[pointer]);
            pointer++;
        }

    }

    return stack;
}

//linear time and space

const asteroids = [10,2,-5];
console.log(asteroidCollision(asteroids));
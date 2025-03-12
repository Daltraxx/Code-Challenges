/*There are n people standing in a queue, and they numbered from 0 to n - 1 in left to right order. 
You are given an array heights of distinct integers where heights[i] represents the height of the ith person.

A person can see another person to their right in the queue if everybody in between is shorter than both of them. 
More formally, the ith person can see the jth person if i < j and min(heights[i], heights[j]) > max(heights[i+1], heights[i+2], ..., heights[j-1]).

Return an array answer of length n where answer[i] is the number of people the ith person can see to their right in the queue.

All the values of heights are unique.*/

const canSeePersonsCount = (heights) => {
    const stack = [];
    const ans = [];
    for (let i = heights.length - 1; i >= 0; i--) {
        let count = 0;
        while (stack.length && heights[i] > heights[stack.at(-1)]) {
            //maintain monotonic decreasing stack
            //and when popping, increase count because current person would see that person
            count++;
            stack.pop();
        }
        
        //if anything in stack, a person is viewable
        //so increase count
        if (stack.length) count++;
        ans[i] = count;
        stack.push(i);
    }

    return ans;
}

const heights = [10,6,8,5,11,9];
console.log(canSeePersonsCount(heights));
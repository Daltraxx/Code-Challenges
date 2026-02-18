/*You have n robots. You are given two 0-indexed integer arrays, chargeTimes and runningCosts, both of length n. 
The ith robot costs chargeTimes[i] units to charge and costs runningCosts[i] units to run. 
You are also given an integer budget.

The total cost of running k chosen robots is equal to max(chargeTimes) + k * sum(runningCosts), 
where max(chargeTimes) is the largest charge cost among the k robots and 
sum(runningCosts) is the sum of running costs among the k robots.

Return the maximum number of consecutive robots you can run 
such that the total cost does not exceed budget.*/

const maximumRobots = (chargeTimes, runningCosts, budget) => {
    const getCurrentNumberOfRobots = (right, left) => {
        //helper function that uses window size to determine current number of robots
        return right - left + 1;
    }

    const getCurrentTotalCost = (largestChargeTime, numberOfRobots, runningCostsSum) => {
        //helper function for calculating current total cost
        return largestChargeTime + numberOfRobots * runningCostsSum;
    }
    
    const deque = [];
    let maxRobots = 0;
    let currentRunningCostsSum = 0;
    let left = 0;

    for (let right = 0; right < chargeTimes.length; right++) {
        //maintain monotonic non-increasing queue to keep track of largest charge Time
        while (deque.length && chargeTimes[right] > chargeTimes[deque.at(-1)]) {
            deque.pop();
        }

        deque.push(right);
        currentRunningCostsSum += runningCosts[right];
        let currentTotalCost = getCurrentTotalCost(chargeTimes[deque[0]], getCurrentNumberOfRobots(right, left), currentRunningCostsSum);

        //shrink window while outside budget right bound is greater than left bound
        while (currentTotalCost > budget && right > left) {
            currentRunningCostsSum -= runningCosts[left];
            left++;

            if (deque.length && deque[0] < left) deque.shift();

            currentTotalCost = getCurrentTotalCost(chargeTimes[deque[0]], getCurrentNumberOfRobots(right, left), currentRunningCostsSum);
        }

        //offer to be answer if valid
        if (currentTotalCost <= budget) {
            const currentNumberOfRobots = getCurrentNumberOfRobots(right, left);
            maxRobots = Math.max(maxRobots, currentNumberOfRobots);
        }
        
    }

    return maxRobots;
}

const chargeTimes = [11,5,5];
const runningCosts = [10,5,5];
const budget = 10;
console.log(maximumRobots(chargeTimes, runningCosts, budget));
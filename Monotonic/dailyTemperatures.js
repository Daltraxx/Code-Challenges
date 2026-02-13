/*Given an array of integers temperatures represents the daily temperatures, 
return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. 
If there is no future day for which this is possible, 
keep answer[i] == 0 instead.*/

const dailyTemperatures = (temperatures) => {
  const stack = [];
  const answer = new Array(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const j = stack.pop();
      answer[j] = i - j;
    }
    stack.push(i);
  }

  return answer;
};

// Time Complexity: O(n) where n is the length of the input array temperatures. Each element is pushed and popped from the stack at most once.
// Space Complexity: O(n) in the worst case, when the stack contains all the indices of the input array. The output array answer also takes O(n) space.

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures));

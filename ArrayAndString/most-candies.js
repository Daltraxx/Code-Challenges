/*There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, 
and an integer extraCandies, denoting the number of extra candies that you have.
Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.
Note that multiple kids can have the greatest number of candies.*/

var kidsWithCandies = function(candies, extraCandies) {
    return candies.map(kid => candies.every(otherKid => kid + extraCandies >= otherKid));
    
};

//O(n^2)
/*The map function iterates over each element in the 'candies' array, 
and for each element, the every function iterates over each element in the 'candies' array again. 
This results in a nested loop structure, 
leading to a time complexity of O(n^2).*/

var kidsWithCandiesLinear = function(candies, extraCandies) {
    // Find out the greatest number of candies among all the kids.
   let maxCandies = Math.max(...candies);
   

   // For each kid, check if they will have greatest number of candies
   // among all the kids if given the extra candies.
   let result = [];
   for (let candy of candies) {
       result.push(candy + extraCandies >= maxCandies);
   }
   
   return result;
};

//O(n)
/*The code snippet has two loops that iterate through the 'candies' array, 
making the time complexity linear, O(n), 
where n is the number of elements in the 'candies' array.*/

console.log(kidsWithCandiesLinear([2,3,5,1,3], 3));
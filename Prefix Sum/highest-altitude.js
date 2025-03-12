/*There is a biker going on a road trip. 
The road trip consists of n + 1 points at different altitudes. 
The biker starts his trip on point 0 with altitude equal 0.
You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). 
Return the highest altitude of a point.*/

const largestAltitude = (gain) => {
    let currentAltitude = 0;
    let maxAltitude = 0;

    for (let num of gain) {
        currentAltitude += num;
        maxAltitude = Math.max(maxAltitude, currentAltitude);
    }

    return maxAltitude;
}

//O(n)
/*The code snippet contains a single loop 
that iterates through each element in the 'gain' array. 
Therefore, the time complexity is O(n) 
where n is the number of elements in the 'gain' array.*/

let gain = [-5,1,5,0,-7];

console.log(largestAltitude(gain));
/*You are given an integer array cards where cards[i] represents the value of the ith card. 
A pair of cards are matching if the cards have the same value.

Return the minimum number of consecutive cards you have to pick up to have a pair of matching cards among the picked cards. 
If it is impossible to have matching cards, return -1.*/

const minimumCardPickup = (cards) => {
    const dict = new Map();

    for (let i = 0; i < cards.length; i++) {
        if (!dict.has(cards[i])) {
            dict.set(cards[i], []);
        }

        dict.get(cards[i]).push(i);
    }

    let ans = Infinity;

    for (let indexArray of dict.values()) {
        for (let i = 1; i < indexArray.length; i++) {
            ans = Math.min(ans, indexArray[i] - indexArray[i - 1] + 1);
        }
    }

    return ans === Infinity ? -1 : ans;
}

//linear time and space complexity

/*We can actually improve this algorithm slightly by observing that we don't need to store all the indices, 
but only the most recent one that we saw for each number. 
This improves the average space complexity. 
The current algorithm has O(n) space complexity always, but with the improvement, 
it is only O(n) in the worst case, when there are no duplicates.*/
const minimumCardPickupRefactored = (cards) => {
    const dict = new Map();
    let ans = Infinity;

    for (let i = 0; i < cards.length; i++) {
        if (dict.has(cards[i])) {
            ans = Math.min(ans, i - dict.get(cards[i]) + 1)
        }

        dict.set(cards[i], i);
    }

    return ans === Infinity ? -1 : ans;
}

/*Although time complexity is still linear, this one is faster because it removes an iteration*/

const cards = [3,4,2,3,4,7];
console.log(minimumCardPickupRefactored(cards));
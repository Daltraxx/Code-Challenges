const minimumCardPickup = (cards) => {
    const cardMap = new Map();
    let minConsecutive = Infinity;
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const prevIndex = cardMap.get(card);
        if (prevIndex !== undefined) {
            minConsecutive = Math.min(i - prevIndex + 1, minConsecutive);
            if (minConsecutive === 2) {
                return 2;
            }
        }
        cardMap.set(card, i);
    }
    return minConsecutive === Infinity ? -1 : minConsecutive;
}

// Time Complexity: O(n) where n is the length of the cards array. We iterate
// through the array once.
// Space Complexity: O(n) in the worst case, if all cards are unique, we store
// each card in the hashmap.
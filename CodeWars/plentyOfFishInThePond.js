function fish(shoal) {
    const shoalFish = new Map();
    let maxFish = -Infinity;
    for (let fish of shoal) {
        const fishInt = Number(fish);
        shoalFish.set(fishInt, shoalFish.get(fishInt) + 1 || 1);
        maxFish = Math.max(fishInt, maxFish);
    }

    let myFish = 1;
    let foodRequired = 4;

    for (let fishLevel = 1; fishLevel <= maxFish; fishLevel++) {
        if (myFish < fishLevel) return myFish;

        while (shoalFish.get(fishLevel) > 0) {
            let foodAvailable = shoalFish.get(fishLevel) * fishLevel;
            
            if (foodAvailable >= foodRequired) {
                const fishNeededToGrow = Math.ceil(foodRequired / fishLevel);
                const leftOver = (fishNeededToGrow * fishLevel) %  foodRequired;
                shoalFish.set(fishLevel, shoalFish.get(fishLevel) - fishNeededToGrow);
                myFish++;
                foodRequired = myFish * 4;
                foodRequired -= leftOver;
            } else {
                foodRequired -= foodAvailable;
                shoalFish.set(fishLevel, 0);
            }

        }
    }

    return myFish;
}

const shoal = "1111";
console.log(fish(shoal));
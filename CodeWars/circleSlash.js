function circleSlash(n) {
    let people = [];
    for (let person = 1; person <= n; person += 2) {
        people.push(person);
    }

    //if people in round not even, last person is front of next round
    if (n % 2 !== 0) {
        people.unshift(people.pop());
    }
    
    while (people.length > 1) {
        const remainingPeople = [];
        for (let i = 0; i < people.length; i += 2) {
            remainingPeople.push(people[i]);
        }

        //if people in round not even, last person is front of next round
        if (people.length % 2 !== 0) {
            remainingPeople.unshift(remainingPeople.pop());
        }

        people = remainingPeople;
    }

    return people[0];
}


const n = 31;
console.log(circleSlash(n));
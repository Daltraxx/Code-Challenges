function circleSlash(n) {
    const people = new Array(n);
    for (let person = 1; person <= n; person++) {
        people[person - 1] = person;
    }

    let i = 0;
    while (people[i + 1]) {
        people.push(people[i]);
        i += 2;    
    }

    return people;
}


const n = 5;
console.log(circleSlash(n));
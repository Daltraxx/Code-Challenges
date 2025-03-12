function disemvowel(str) {
    const regex = /[aeiou]/gi;
    return str.replace(regex, '');
}

console.log(disemvowel('This website is for losers LOL!'));
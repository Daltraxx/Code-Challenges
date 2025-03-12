//Greatest Common Divisor of Strings
/*For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.*/

var gcdOfStrings = function(str1, str2) {
    //identify shorter string
    let shortStr = '';
    let longStr = '';
    str1.length <= str2.length ? shortStr = str1 : shortStr = str2;
    shortStr === str1 ? longStr = str2 : longStr = str1;

    let base = shortStr;

    while (base.length > 0) {
        //if longStr and shortStr divide by base evenly, the base can be checked if it is the gcd. If not, remove last char from base and try again
        if (longStr.length % base.length === 0 && shortStr.length % base.length === 0) {
            let longStrArr = [];
            let shortStrArr = [];
            for (let i = 0; i < longStr.length; i += base.length) {
                longStrArr.push(longStr.slice(i, i + base.length));
            }

            for (let i = 0; i < shortStr.length; i += base.length) {
                shortStrArr.push(shortStr.slice(i, i + base.length));
            }
            
            //check if every base-length division of longStr is equal to base. If not, remove last char from base and try again
            if (longStrArr.every(str => str === base) && shortStrArr.every(str => str === base)) {
                return base;
            } else {
                base = base.slice(0, base.length - longStrArr[0].length);
            }
    
        } else {
            base = base.slice(0, base.length - 1);
        }
    }
    
    //return empty base string if no gcd is found
    return base;

};

//O(n^2)
/*The code contains nested loops that iterate over the lengths of the input strings, 
resulting in a quadratic time complexity.*/

const str1 = 'TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX';
const str2 = 'TAUXXTAUXXTAUXXTAUXXTAUXX';

console.log(gcdOfStrings(str1, str2));
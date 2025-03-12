/*You are given a string s. Continuously remove duplicates (two of the same character beside each other) until you can't anymore. Return the final string after this.

For example, given s = "abbaca", you can first remove the "bb" to get "aaca".
 Next, you can remove the "aa" to get "ca". 
 This is the final answer.*/

 const removeDuplicates = (s) => {
    const stack = [];

    for (let char of s) {
        if (stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.join('');
 }

 //linear time and space complexity

 const s = "abbaca";
 console.log(removeDuplicates(s));
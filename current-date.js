//Can you write a function in JavaScript to get the current date in the format “YYYY-MM-DD”?

//toISOString returns 2024-07-12T03:19:05.784Z
const currentDate = () => new Date().toISOString().split('T')[0];

/*In this function, the Date object is used to get the current date and time.
The toISOString method is then employed to convert the date to a string in the ISO 8601 format. 
Finally, the string is split at the 'T' character, and only the part before 'T' (which represents the date) is extracted. 
This provides the current date in the desired "YYYY-MM-DD" format.*/

console.log(currentDate());
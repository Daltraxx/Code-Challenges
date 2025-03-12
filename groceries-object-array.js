/*Write a function groceries() that takes an array of object literals of grocery items. 
The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. 
Make sure spaces (' ') are inserted where they are appropriate.*/

const groceries = (objects) => {
    let groceryString = '';
    
    
    for (let i = 0; i < objects.length; i++) {
        groceryString += objects[i].item;
        
        if (i < objects.length - 2) {
            groceryString += ', ';
        } else if (i === objects.length - 2) {
            groceryString += ' and ';
        }
    }

    return groceryString;
  }

  //O(n)
  /*The code snippet contains a single for loop that iterates through the 'objects' array. 
  The loop runs 'n' times, where 'n' is the length of the 'objects' array. 
  Therefore, the time complexity of the code is O(n).*/
  
  console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] ));
  console.log(groceries( [{item: 'Bread'}, {item: 'Butter'}] ))
  console.log(groceries( [{item: 'Cheese Balls'}] ))
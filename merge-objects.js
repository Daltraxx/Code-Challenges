//Can you write a function in JavaScript to merge two objects without overwriting existing properties?

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

//O(n)
/*The time complexity of this code snippet is O(n) 
because it involves spreading the properties of both input objects into a new object, 
resulting in a linear operation based on the total number of properties in both objects.*/

/*This function utilizes the spread (...) operator within an object literal to merge the properties of obj1 and obj2. 
The order is important; properties of obj2 will overwrite properties of obj1 with the same name. 
This one-liner is effective for creating a new object that contains the combined properties of both objects without modifying the original objects. */
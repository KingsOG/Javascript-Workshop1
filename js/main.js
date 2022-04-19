//Javascript course... Console logs, Datas. Arithmetics
console.log(30);
console.log(40 + 2); // Print 42 to console.
console.log(2 - 1); // Prints 1 to the console.
console.log(50 / 5); // Prints 10 to the console.
console.log("I love to code"); // Prints I love to code to the console.

//Concatenation = The process of appending one string to the other

console.log("front " + "space"); //Prints front space
console.log("middle" + " " + "space"); // Prints middle space
console.log("no"+"space"); //Prints nospace

/*Inside a console.log() statement, concatenate the two strings 'Hello' and 'World'.

Note: You should concatenate the two strings exactly (without introducing any additional characters).*/

console.log("Hello" + "World");

/*We left off the space last time. Create a second console.log() statement in which you concatenate the strings 'Hello' and 'World', but this time make sure to also include a space (' ') between the two words.*/

console.log("Hello" + " " + "World");

//Use the .length property to log the number of characters in the following string to the console:

console.log("Teaching the world how to code".lenght);

// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log("Codecademy".toUpperCase());

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log("  remove whitespace  ".trim());

//Built-in Objects
//Inside of a console.log(), create a random number with Math.random(), then multiply it by 100.
console.log(Math.random()*100);

//Now, use Math.floor() to make the output a whole number

console.log(Math.floor(Math.random()*100)); //77

/*Find a method on the JavaScript Math object that returns the smallest integer greater than or equal to a decimal number.

Use this method with the number 43.8. Log the answer to the console.*/

console.log(Math.ceil(43.8)); //44

/*Use the JavaScript documentation to find a method on the built-in Number object that checks if a number is an integer.

Put the number 2017 in the parentheses of the method and use console.log() to print the result.*/

console.log(Number.isInteger(2017)); //True

//In programming, a variable is a container for a value.

/*Declare a variable named favoriteFood using the var keyword and assign to it the string 'pizza'.
Declare a variable named numOfSlices using the var keyword and assign to it the number 8.
Under the numOfSlices variable, use console.log() to print the value saved to favoriteFood.

On the following line, use console.log() to print the value saved to numOfSlices.*/

var favouriteFood = "pizza";
var numOfSlices = 8;
console.log(favouriteFood);
console.log(numOfSlices);

//let keyword signals that the variable can be reassigned a different value.

/*Create a let variable called changeMe and set it equal to the boolean true.
On the line after changeMe is declared, set the value of changeMe to be the boolean false.

To check if changeMe was reassigned, log the value saved to changeMe to the console.*/

let changeMe = true;
changeMe = false;
console.log(changeMe);

//const
/*
Create a constant variable named entree and set it to equal to the string 'Enchiladas'.
*/

const entree = "Enchiladas";
console.log(entree);

//Mathematical Assignment Operators

//Use the += mathematical assignment operator to increase the value stored in levelUp by 5

let levelUp = 10;
levelUp += 5;

//Use the -= mathematical assignment operator to decrease the value stored in powerLevel by 100.

let powerLevel = 9001;
powerLevel -= 100;

//Use the *= mathematical assignment operator to multiply the value stored in multiplyMe by 11.
let multiplyMe = 32;
multiplyMe *= 11;

//Use the /= mathematical assignment operator to divide the value stored in quarterMe by 4.

let quarterMe = 1152;
quarterMe /= 4;
/*
Question 1: ES6 Features:
Create a script with a function named lowerCaseWords that takes a mixed array as input.
The function will do the following.
    o return a promise that is resolved or rejected
    o filter the non-strings and lower case the remaining words
*/

// Creating lowerCaseWords function using arrow function notation and passing an array as an argument
const lowerCaseWords = (inputArray) =>
    // Creating new promise to check the input and returning appropriate function is invoked
    new Promise((resolve, reject) => {
        if (!Array.isArray(inputArray) || inputArray.length == 0) reject("Error: Invalid array passed!");
        // Filtering out the non-strings out, and lowercasing the strings
        resolve(inputArray.filter((arrayElement) => isNaN(arrayElement)).map((arrayString) => arrayString.toLowerCase()));
      });

const mixedArray = ['PIZZA', 10, true, 25, 'Wings', 'Sanchit1'];
lowerCaseWords(mixedArray)
// Checking the promise results and displaying messages accordingly
.then((res) => console.log(res))
.catch((err) => console.log(err));
  
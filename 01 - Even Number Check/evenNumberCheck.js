/**
 * Exercise 1: Even Number Check
 * 
 * Description:
 * Write a function that takes a number as input and returns true if 
 * the number is even, and false if it is odd.
 * 
 * Example:
 * isEven(4) // true
 * isEven(7) // false
 */

const isEven = (number) => {
    return (number % 2) === 0;
}

console.log( isEven(4) );
console.log( isEven(7) );




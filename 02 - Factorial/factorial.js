/**
 * Exercise 2: Factorial
  
   Description:
   Write a function that takes a non-negative integer and returns its factorial.
   The factorial of n (written as n!) is the product of all positive integers 
   less than or equal to n.

   Examples:

   factorial(0) // 1
   factorial(3) // 6   (3 * 2 * 1)
   factorial(5) // 120 (5 * 4 * 3 * 2 * 1)
 */

const factorial = (number) => {
    if (number < 0 || typeof number !== 'number' || !Number.isInteger(number)) {
        return `Error: ${number} is not a positive number.`;
    }

    if (number === 0) {
        return 1;
    }

    let accumulator = 1;

    for (let i = 1; i <= number; i++) {
        accumulator = accumulator * i;   
    }

    return accumulator;
}

console.log( factorial(0) );
console.log( factorial(3) );
console.log( factorial(5) );
 


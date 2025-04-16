/**
 * Exercise 3: Reverse a String
   Description:
   Write a function that takes a string and returns a new string 
   with the characters in reverse order.

   Examples:
   reverseString("hello") // "olleh"
   reverseString("JavaScript") // "tpircSavaJ"
 */

const reverseString = (string) => {
    let reversed = '';

    for (let i = string.length - 1; i >= 0; i--) {
        reversed = reversed + string[i];
    }

    return reversed;
}

console.log( reverseString("hello") );
console.log( reverseString("JavaScript") );

// * Another solution
// const reverseString = str => str.split('').reverse().join('');
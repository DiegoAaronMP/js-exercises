/**
 * Exercise 5: Find the Maximum in an Array
   Description:
   Write a function that takes an array of numbers and 
   returns the largest number in the array.

   Examples:
   findMax([1, 3, 7, 2, 5])        // 7
   findMax([-10, -3, -20])         // -3
   findMax([42])                   // 42

   Bonus: Handle the case where the array is empty 
   (return null or a custom message).
 */

const findMax = (array) => {
    if (array.length === 0) {
        return 'Error: The array is empty';
    }

    let max = array[0];

    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }

    return max;
}

console.log( findMax([1, 3, 7, 2, 5]) );
console.log( findMax([-10, -3, -20]) );
console.log( findMax([42]) );
console.log( findMax([]) );

// * Another Solution
// const findMax = arr => arr.length === 0 ? null : Math.max(...arr);


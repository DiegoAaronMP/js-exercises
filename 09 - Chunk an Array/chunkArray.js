/**
 * Exercise 9: Chunk an Array
   Description:
   Write a function that takes an array and a number size, 
   and splits the array into subarrays (chunks) of that size.

   Examples:

   chunk([1, 2, 3, 4, 5], 2)   // [[1, 2], [3, 4], [5]]
   chunk([1, 2, 3, 4], 3)      // [[1, 2, 3], [4]]
   chunk([], 4)                // []
 */

   
const chunk = (array, chunkSize) => {
    if (array.length === 0) {
        return [];
    }

    let slicedArray = [];

    while (array.length > 0) {
        slicedArray.push(array.splice(0, chunkSize));
    }
    
    return slicedArray;
}

console.log(chunk( [1, 2, 3, 4, 5], 2 ));
console.log(chunk( [1, 2, 3, 4], 3 ));
console.log(chunk( [], 4 ));

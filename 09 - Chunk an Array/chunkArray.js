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

// * Solution mutating the array
// const chunk = (array, chunkSize) => {
//     if (array.length === 0) {
//         return [];
//     }

//     const splicedArray = [];

//     while (array.length > 0) {
//         splicedArray.push(array.splice(0, chunkSize));
//     }
    
//     return splicedArray;
// }

// * Immutability function
const chunk = (array, chunkSize) => {
    if (array.length === 0) {
        return [];
    }

    const slicedArray = [];

    let iterator = 0;
    let hasMoreElements = true;
    while (hasMoreElements) {

        const slice = array.slice(iterator, chunkSize + iterator);

        if (slice.length > 0) {
            slicedArray.push(slice);
            iterator += chunkSize;
        } else {
            hasMoreElements = false;
        }
    }
    
    return slicedArray;
    
}

// * Another immutable solution using for loop
// const chunk = (array, chunkSize) => {
//     const result = [];

//     for (let i = 0; i < array.length; i += chunkSize) {
//         result.push(array.slice(i, i + chunkSize));
//     }

//     return result;
// }

console.log(chunk( [1, 2, 3, 4, 5], 2 ));
console.log(chunk( [1, 2, 3, 4], 3 ));
console.log(chunk( [], 4 ));

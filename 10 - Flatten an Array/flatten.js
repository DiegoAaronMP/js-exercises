/**
 * Exercise 10: Flatten an Array
 * 
   Description:
   Write a function that takes a nested array and returns a one-level flattened array 
   (i.e., an array with all values at one level deep).

   Examples:

   flatten([1, [2, 3], [4, [5]]])      // [1, 2, 3, 4, [5]]
   flatten([[1], [2, [3]], 4])         // [1, 2, [3], 4]
   flatten([1, 2, 3])                  // [1, 2, 3]
   flatten([])                         // []
 */

const flatten = (array) => {
    if (array.length === 0) {
        return [];
    }

    const flattenedArray = [];

    for (const element of array) {
        // determines whether the passed value is an Array
        Array.isArray(element)
            ? flattenedArray.push(...element)
            : flattenedArray.push(element)
    }

    return flattenedArray;
}

console.log(flatten([1, [2, 3], [4, [5]]]));
console.log(flatten([[1], [2, [3]], 4]));
console.log(flatten([1, 2, 3] ));
console.log(flatten([]));







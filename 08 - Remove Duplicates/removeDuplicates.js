/**
 * Exercise 8: Remove Duplicates
   Description:
   Write a function that takes an array and returns a new array 
   with all duplicate elements removed, but preserving the original 
   order of first appearances.

   Examples:
   removeDuplicates([1, 2, 2, 3, 4, 3, 5])   // [1, 2, 3, 4, 5]
   removeDuplicates(["a", "b", "a", "c", "b"]) // ["a", "b", "c"]
   removeDuplicates([])  // []
 */

const removeDuplicates = (array = []) => {
    // A Set is a data structure that stores only unique values
    const noDuplicates = new Set();

    array.map(element => noDuplicates.add(element));

    // * Another way to add the elements to the Set
    // array.forEach(element => {
    //     noDuplicates.add(element);
    // });

    return [...noDuplicates];
}

console.log( removeDuplicates([1, 2, 2, 3, 4, 3, 5]) );
console.log( removeDuplicates(["a", "b", "a", "c", "b"]) );
console.log( removeDuplicates([]) );
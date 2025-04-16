/**
 * Exercise 4: Count Vowels
   Description:
   Write a function that takes a string and returns the number 
   of vowels (a, e, i, o, u) in it.
   Count both uppercase and lowercase vowels.

   Examples:
   countVowels("hello")       // 2
   countVowels("JavaScript")  // 3
   countVowels("xyz")         // 0
 */

const vowels = ['a','e','i','o','u'];

const countVowels = (string) => {
    let accumulator = 0;
    const lowercaseString = string.toLowerCase();

    for (let i = 0; i < string.length; i++) {
        vowels.some(vowel => vowel === lowercaseString[i]) && accumulator++

        // Another way to do it
        // if (vowels.includes(lowercaseString[i])) accumulator++;
    }

    return accumulator;
}

console.log( countVowels("hello") );
console.log( countVowels("JavaScript") );
console.log( countVowels("JAvaScrIpt") );
console.log( countVowels("xyz") );


// A solution using a regex
// const countVowels = str => (str.match(/[aeiou]/gi) || []).length;
/**
 * Exercise 11: Capitalize Words
 * 
   Description:
   Write a function that takes a string and returns the same string but 
   with the first letter of each word capitalized.
   Words are separated by spaces. You should preserve spacing, 
   including multiple or leading/trailing spaces.

   Examples:
   capitalizeWords("hello world")          // "Hello World"
   capitalizeWords("javaScript is fun")    // "JavaScript Is Fun"
   capitalizeWords("")                     // ""
   capitalizeWords("  multiple   spaces ") // "  Multiple   Spaces "
 */

// * My solution
// const capitalizeWords = (string) => {
//     if (string.length === 0 ) {
//         return '';
//     }

//     let newString = '';

//     for (let i = 0; i < string.length; i++) {
//         if (/([a-z])/.test(string[i]) && (!/([a-z])/.test(string[i - 1]) || !string[i - 1])) {
//             newString += string[i].toUpperCase()
//         } else {
//             newString += string[i]
//         }
//     }

//     return newString;
// }



// * Another solution
const capitalizeWords = (string) => {
    if (string.length === 0 ) {
        return '';
    }

    let newString = '';

    for (let i = 0; i < string.length; i++) {
        const isLowercaseLetter = /[a-z]/;
        const isWordStart = !isLowercaseLetter.test(string[i - 1]) || i === 0;

        if (isWordStart) {
            newString += string[i].toUpperCase()
        } else {
            newString += string[i]
        }
    }

    return newString;
}

console.log(capitalizeWords("hello world"));
console.log(capitalizeWords("javaScript is fun"));
console.log(capitalizeWords(""));
console.log(capitalizeWords("  multiple   spaces "));


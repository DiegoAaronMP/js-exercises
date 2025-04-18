/**
 * Exercise 6: Palindrome Checker
 * 
   Description:
   Write a function that checks if a given string is a 
   palindrome — a word that reads the same forward and backward.

   Ignore spaces, punctuation, and capital letters.

   Examples:

   isPalindrome("racecar")           // true
   isPalindrome("RaceCar!")           // true
   isPalindrome("A man a plan a canal Panama") // true
   isPalindrome("hello")             // false
 */

const punctuation = /[\.,¿?¡!:;\s]/g;

// Another regular expression that eliminates anything other than letters
// /[^a-z]/gi

const isPalindrome = (string = '') => {
    const normalizedString = string
                                .replace(punctuation, '')
                                .toLowerCase()
                                .split('');

    // We need to do this because reverse is a destructive action
    const backupString = [...normalizedString]
                                .join('');    
    const reversedString = normalizedString
                                .reverse()
                                .join('');
    
    return backupString === reversedString;
}

console.log( isPalindrome("racecar") );
console.log( isPalindrome("RaceCar!") );
console.log( isPalindrome("A man a plan a canal Panama") );
console.log( isPalindrome("hello") );

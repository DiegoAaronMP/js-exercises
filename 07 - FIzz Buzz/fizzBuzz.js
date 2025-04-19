/**
 * Exercise 7: FizzBuzz
   Description:
   Write a function that prints the numbers from 1 to 100, but:

   For multiples of 3, print "Fizz" instead of the number.

   For multiples of 5, print "Buzz".

   For numbers that are multiples of both 3 and 5, print "FizzBuzz".

   Expected output:
   1
   2
   Fizz
   4
   Buzz
   Fizz
   7
   8
   Fizz
   Buzz
   11
   Fizz
   13
   14
   FizzBuzz
   ...
// * The function should not return anything — just log the output to the console.
*/
let threeMultiples = [];
let fiveMultiples = [];

const getMultiples = (limit, array, multiple, iterator = 1) => {

    const result = multiple * iterator;
    const newIterator = iterator + 1;
    
    if (result <= limit) {
        array.push(result);
        getMultiples(limit, array, multiple, newIterator);
    } else {
        return;
    }
}

// First solution
// const fizzBuzz = (limit = 100) => {
//     getMultiples(limit, threeMultiples, 3);
//     getMultiples(limit, fiveMultiples, 5);
    
//     for (let i = 1; i <= limit; i++) {
//         if (threeMultiples.includes(i)) {
//             console.log('Fizz');
//         }
//         if (fiveMultiples.includes(i)) {
//             console.log('Buzz');
//         }
//         if (threeMultiples.includes(i) && fiveMultiples.includes(i)) {
//             console.log('FizzBuzz');
//         }
//         if (!threeMultiples.includes(i) && !fiveMultiples.includes(i)) {
//             console.log(i);
//         }
//     }
// }

// "Better" solution
const fizzBuzz = (limit = 100) => {
    for (let i = 1; i <= limit; i++) {

        let output = '';

        if (i % 3 ===  0) {
            output = output + 'Fizz'
        }
        if (i % 5 ===  0) {
            output = output + 'Buzz';
        }
        
        (output.length > 0)
            ? console.log(output)
            : console.log(i);
    }
}

fizzBuzz();
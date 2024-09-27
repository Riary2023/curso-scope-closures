
pi = 3.1416; 
console.log(pi); // Output -> 3.1416

'use strict';
pi = 3.1416; 
console.log(pi); // Output -> ReferenceError: pi is not defined

function myFunction() {
    'use strict';
    return pi = 314.16
}
console.log(myFunction()); // Output -> ReferenceError: pi is not defined

function myFunction() {
    return pi = 314.16
}
console.log(myFunction()); // Output -> 3.1416
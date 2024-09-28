//var nameOfDog;          // undefined

//console.log(nameOfDog); // Output -> undefined
//var nameOfDog = 'Ramon'
//console.log(nameOfDog); // Output -> Ramon 

var Ramon; 
function nameOfDog() {
    console.log(`El mejor perrito es ${Ramon}`); // Output -> El mejor perrito es undefined
}

nameOfDog();

function nameOfDog() {
    console.log(`El mejor perrito es ${Ramon}`); // Output -> ReferenceError: Ramon is not defined
}

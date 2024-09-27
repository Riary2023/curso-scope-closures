// Variables: 

var a;         // Estamos declarando la variable a 
var b = b;     // Estamos declarando b / Y asignado b
b = 'bb';      // Reasignacion
var a = 'aa'   // Redeclaracion 


// Global Scope: 

var fruit = 'Apple';     // Global 

function bestFruit() {
    console.log(fruit);  // Output -> Apple 
}
bestFruit(); // Declaracion


function countries() {
    country = 'Colombia'; // Global
    console.log(country); // Output -> Colombia
}
countries();
console.log(country);     // Output -> Colombia
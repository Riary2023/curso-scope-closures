
var firstName; // Undefined 
firstName = 'Alejandro'; 
console.log(firstName);     // Output -> Alejandro

var lastName = 'Ramirez';   // Declarar / Asignar
lastName = 'Ana';           // Reasignar 
console.log(lastName);      // Output -> Ana

var secondName = 'Esteban'; // Declarando / Asignando
var secondName = 'Ana';     // Reasignando
console.log(secondName);    // Output -> Ana

// Let 
let fruit = 'Apple';        // Declarar / Asignar
fruit = 'Kiwi';             // Reasignar 
console.log(fruit);         // Output -> Kiwi / Con Let no podemos redeclarar

// Const 
const animal = 'dog';       // Declarar / Asignar
animal = 'cat';             // Reasignando 
console.log(animal);        // Output -> TypeError: Assignment to constant variable / Con const no podemos reasignar


const vehicles = [];
vehicles.push("🚗"); 
console.log(vehicles);      // Output -> [ '🚗' ]

vehicles.pop(); 
console.log(vehicles);      // Output -> []
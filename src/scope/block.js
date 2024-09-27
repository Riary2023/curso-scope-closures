
function fruits() {
    if (true) {
        var fruit1 = 'Apple';
        let fruit2 = 'Kiwi'; 
        const fruit3= 'Mango';
    }
    console.log(fruit1);  // Function Scope        // Output -> Apple 
    console.log(fruit2);  // Block Scope           // Output -> ReferenceError: fruit2 is not defined
    console.log(fruit3);  // Block Scope           // Output -> 
}
fruits();

function fruits() {
    if (true) {
        var fruit1 = 'Apple';
        let fruit2 = 'Kiwi'; 
        const fruit3= 'Mango';        
        console.log(fruit2);      // Output -> Kiwi
        console.log(fruit3);      // Output -> Mango
    }                             // Output -> Apple
    console.log(fruit1);                             
} 
fruits();

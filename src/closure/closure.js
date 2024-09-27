
function greeting() {              // Asignamos y declaramos una variable 
    let username = 'Ramon'; 

    function displayUserName() {
        return `Hello ${username}` // Accedemos a lo que tiene la variable  
    }
    return displayUserName;
}

const g = greeting();
console.log(g);        // Ouput -> [Function: displayUserName]
console.log(g());      // Ouput -> Hello Ramon

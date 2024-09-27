
const myGlobal = 0;

function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);  // Output -> 0

    function parent() {     // function interna 
        const inner = 2;
        console.log(myNumber, myGlobal);  // Output -> 1 0

        function child(){
            console.log(inner, myNumber, myGlobal);  // Output -> 2 1 0
        }
        return child();
    }
    return parent();
}
myFunction();
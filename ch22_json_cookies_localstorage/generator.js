// let listofNames = function () {
//     console.log("Ali")
//     console.log("Sahra")
//     console.log("Amina")
//     console.log("Ayan")
//     console.log("Amran")
//     console.log("Abdi")
    
// }

// listofNames()


function* listOfNames() {
    yield "Ali";
    yield "Sahra";
    yield "Amina";
    yield "Ayan";
    yield "Amran";
    yield "Abdi";
}


// create generator instance

const names = listOfName();


// get values one by one
console.log(names.next().value); // Ali

console.log(names.next().value); // Sahra
console.log(names.next().value); // Amina


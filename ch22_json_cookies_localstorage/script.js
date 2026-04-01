

// let person = {
//     firstName : "Abdi",
//     lastName :"Bile",
//     age : 50,
//     isMarried : true
// }
// // console.log(person);
// let personstring = JSON.stringify(person);
// console.log(person)
// console.log(personstring);

// let person2 = JSON.parse(personstring);
// console.log(person2);


// Save data to localStorage
function saveName() {
    const name = document.getElementById("nameInput").value;
    localStorage.setItem("username", name);
    alert("Name saved!");
}

// Load data from localStorage
function loadName() {
    const name = localStorage.getItem("username");
    document.getElementById("output").textContent = 
        name ? "Saved name: " + name : "No name saved.";
}

// Clear data from localStorage
function clearName() {
    localStorage.removeItem("username");
    document.getElementById("output").textContent = "Data cleared.";
}

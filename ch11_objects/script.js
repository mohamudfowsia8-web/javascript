// let firstName = "Fowsia"
// let lastName = "Mohamud"
// let age = 22

// let firstName = "Yasmin"
// let lastName = "Rage"
// let age = 22

// let person1= {
//     firstName: "Fowsia",
//     lastName:"Mohamud",
//     age: 22
// }

// let person2 = {
//     firstName: "Yasmin",
//     lastName:"Rage",
//     age: 24
// };
// // console.log(person1)

// console.log(person1.lastName)

let person3 = {}
person3.firstName = "Ahmed"
person3.lastName = "Ali"
person3.age = 30
person3.talk = function () {
    console.log(this.firstName + " is talking")
}
console.log(person3.talk())
console.log(person3["firstName"])

// for(let key in person3){
//     console.log(key)
// }


for(let key in person3){
    console.log(person3[key])
}
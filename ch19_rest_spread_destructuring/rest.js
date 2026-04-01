let person = {
    firstName : "Fowsia",
    lastName : "mohamud",
    age : 25,
    ismarried : false
};




let{firstName, ...rest} = person
// console.log(rest.lastName, rest.age);
console.log( firstName, rest.lastName, rest.age);





// function print(num1, num2, ...rest) {
//     // console.log(rest)
//     console.log (num1 + num2 + rest[0] +rest[1] +rest[2]) 

//     }

// print(2,5,8,3,4)


let noFirstNameError = new Error("please make sure you write your first name")

try {
console.log("this is the firtst line of our code")
let firstName 

if (firstName == undefined) {
    throw noFirstNameError
}
console.log("this is the last line of our code");
} catch(error) {
   console.log(`error  ${error.messege}  end of error`) 
   
} finally {
   console.log("regardless of error i run")
}




function addall (num1, num2, num3) {
    return num1 + num2 + num3
}

// let result = addall(4,2, 3)
// let firstNumber = 4
// let secondNumber = 2
// let thirdNumber = 3
// let result = addall(firstNumber, secondNumber, thirdNumber)

// let allNumbers = [4, 2, 3];
// let result = addall(...allNumbers);
// console.log(result);

let girls = ["Fatima", "Fartuun", "Amina", "Sahra"];
let boys = ["Ali", "Farah", "Jama", "Nur", "Bile"]

let allTheStudents = [...girls, ...boys]
console.log(allTheStudents)
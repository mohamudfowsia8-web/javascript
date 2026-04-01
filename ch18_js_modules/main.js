import { add, multiply } from "./math.js";

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

const addBtn = document.getElementById("addBtn");
const multiplyBtn = document.getElementById("multiplyBtn");

addBtn.addEventListener("click", () => {
    const a = Number(num1.value);
    const b = Number(num2.value);

    const sum = add(a, b);

    result.textContent = "Result: " + sum;
});

multiplyBtn.addEventListener("click", () => {
    const a = Number(num1.value);
    const b = Number(num2.value);

    const product = multiply(a, b);

    result.textContent = "Result: " + product;
});
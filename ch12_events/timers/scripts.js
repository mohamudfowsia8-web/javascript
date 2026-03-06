function executeThiscode() {
console.log("my name is Fowsia");
console.log("i like coding");
console.log("...........");
}

// executeThiscode()
// setTimeout(executeThiscode,2000)
// setInterval(executeThiscode, 1000)
let interval = setInterval(executeThiscode, 1000)

let canceller = () = => {
  clearInterval(interval);  
}
setTimeout(canceller, 20000)

//"", '',0,-0,NaN,false,null,undefined

let bool1 = true;
let bool2 = false;



console.log(typeof bool1);
console.log(typeof bool2);


let value = 2 < 5;

console.log(typeof value);


let result = true;

if (result) {
	console.log("another boolean");
}


let number = 5;

if (number < 6) {
	console.log("another boolean");
}


let text = "just a text"; 

if (text) { // When 'text' is used in a condition it becomes a true value
	console.log("how is this possible");
}



let falsy = 0;

if (falsy) {
	console.log("runs only if true");
}
else {
	console.log("turns out to be false");
}


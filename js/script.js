//Primitive Data Types
//String, Number, Symbol, Boolean, Undefined, Null
//Arrays, Functions, Objects = object
//(typeof)

//assigning to primitive value any changes
//are made directly to that value

//assigning non-primitive value to variable is done by reference
//so any of the changes will affect all the references

let number = 1;
let number2 = number;
number2 = 4;

console.log("The first value is " + number);
console.log("The second value is " + number2);


let person = {name: 'bob'};
let person2 = person;
person2.name = "john";

console.log("The name of the first person is " + person.name);
console.log("The name of the second person is " + person2.name);



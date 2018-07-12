//String

let name = "john";
let lastName = "pepper";

let fullName = name + " " + lastName; // concatination

console.log(fullName);
//Obj
let person = {
    name: "John", // properties
    lastName: "Pepper",
    fullName: function() {  // methods
        console.log(this.name + " " + this.lastName )
    }
}
console.log(person.name);
person.fullName();

// String obj

let human = "John Pepper";

let length = human.length;
console.log(length);

console.log(human.toLowerCase());
console.log(human.toUpperCase());

console.log(human.charAt(0));
console.log(human.charAt(human.length-1));

console.log(human.indexOf("e"));

console.log(human.toLowerCase().startsWith("john"));
console.log(human.toLowerCase().endsWith("pepper"));

console.log(human.slice(0,5));
console.log(human.slice(-5));

console.log(human.toLowerCase().includes("john"));



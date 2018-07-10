
//Objects in JS

let person = {
    
    name: "John",
    lastName: "Pepper",
    age: 25,
    education: false,
    wife: true,
    siblings: ['sister','brother'],
    fullName: function() {
        console.log("And the full name of the person is : " + person.name + " " + person.lastName )
    },
    describePerson: function(){ 
    
        console.log( person.name + " is " + person.age + " and has " + person.siblings.length + " Siblings" );

        console.log( person.name + " also has education : " + person.education );
        
        console.log( person.name + " is married : " + person.wife );
        
    }
}

let personName = person.name;
let personLastName = person['lastName'];

console.log(personName);
console.log(personLastName);

person.fullName();

console.log(person.age);

person.describePerson();







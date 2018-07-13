//for loop

//for(let i = 1; i <= 10; i++) {
//    console.log(`Your number ${i}`);
//}

let friends = ['bob','suzy','john','eddie','olga'];

//for (let i = 0; i < friends.length; i++) {
//	console.log(`Your friend number ${i+1} is ${friends[i]}`);
//}

for (let i = friends.length-1; i >= 0; i--) {
	console.log(`Your friend number ${i+1} is ${friends[i]}`);
}
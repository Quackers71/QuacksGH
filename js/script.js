// there are many methods
// MDN
// there is no point of memorizing
// the best way to learn is to build using them

let toDoList = [];


function addItem(arr) {
    let answer = prompt("What would you like to do today? : ");
	let correct = answer.toLowerCase().trim();
    
	if (checkDuplicate(arr,correct)) {
		arr.push(correct);
	}
	else {
		alert('Item won\'t be added to list as it already exists, do not work so hard');
	}
}


function checkDuplicate(arr,item) {
	let exists = false;
	let index = arr.indexOf(item); //-1
	if (index != -1) {
		exists = false;
	}
	else {
		exists = true;
	}
	return exists;
}


addItem(toDoList);
addItem(toDoList);
addItem(toDoList);
console.log(toDoList);

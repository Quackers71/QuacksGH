


function calculatorTip(amount,tip) {
	
	let percent = (tip/100); // 0.05
	
	let tipAmount = amount * percent;
	let totalAmount = amount + tipAmount;
	
	if (tip <= 5) {
		
		console.log("You have to do better than that." + "\n" + tip + "% is very low");
		console.log("You left a tip of " + tipAmount + " dollars");
		console.log("Your total amount is " +  totalAmount + " dollars");
			}
	else if (tip >= 20) {
			 
		console.log("You are very generous." + "\n" + tip + "% is very good");
		console.log("You left a tip of " + tipAmount + " dollars");
		console.log("Your total amount is " +  totalAmount + " dollars");
	}
	else {
		console.log("You left a good tip." + "\n" + tip + "% is very good");
		console.log("You left a tip of " + tipAmount + " dollars");
		console.log("Your total amount is " +  totalAmount + " dollars");
	}
	
	/*
	console.log("This is your tip percentage " + percent);
	console.log("You left a Tip of " + tipAmount);
	
	console.log("Your sub-total is " + amount);
	console.log("Your total Amount " + totalAmount);
	*/	
}

calculatorTip(100,4);
calculatorTip(100,15);
calculatorTip(123,25);
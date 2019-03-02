// Get age and convert it to a Number (prompt always returns a String)
var age = Number(prompt("What is your age?"));

//If age is negative - print an error message
if(age < 0) {
	console.log("Error - Is your age for real??");
}

//If age is 21 - print "Happy 21st birthday!!"
if(age === 21) {
	console.log("Happy 21st birthday!!")
}

//If age is odd - print "Your age is odd!"
if(age % 2 !== 0) {
	console.log("Your age is odd...");
}

//BONUS - If age is perfect square - print "Perfect Square!!!"
if(age % Math.sqrt(age) === 0) {
	console.log("Perfect Square!!!");
}

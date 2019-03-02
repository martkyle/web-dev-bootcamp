//create secretNumber
var secretNumber = 4;

//ask user for guess
var stringGuess = Number (prompt("Guess a number"));
var guess =Number(stringGuess);

//check if guess is right
if(guess === secretNumber) {
	alert("You Got It Right!");
}
//check if guess is higher
else if(guess > secretNumber) {
	alert("To high, try again");
}

//check if guess is lower
else {
	alert("To low, try again");
}
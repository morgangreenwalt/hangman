$(document).ready(function(){

var availableWords = ["ipa", "stout", "lambic", "gueuze", "kriek"];
var letterChoices = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var chances = 15;
var guesses = [];
var currentWord = availableWords[Math.floor(Math.random() * availableWords.length)];
var blanks = currentWord.split("").map(function(){return "_"})

//Game start display
$(".current-word").html("<h4>" + "Current Beer Style<br/>" + blanks.join(" ") + "</h4>");

//User guesses to correct word
document.onkeyup = function(event) {
	var finder = currentWord.indexOf(userChoice);
	var userChoice = event.key;
	console.log(currentWord);
	
	while (finder > -1) {
		blanks[finder] = userChoice;
		finder = currentWord.indexOf(userChoice,finder + 1);
		$(".current-word").html("<h4>" + userChoice + "</h4>");
	}

//Letters Already Guessed
	if (guesses.indexOf(userChoice) === -1) {
		guesses.push(userChoice);
		$("#letters-bucket").html("<h4>" + "Letters already guessed<br/>" + guesses.join(" ") + "</h4>");
	}

//Chances counter + loser prompt
	chances--;
	$(".guesses-remaining").html(chances);
	if (chances === 0) {
		alert("Booooooo, you lose. Go try different beer styles then return for more.");
		
		//Reset game
		function reset() {
		var chances = 15;	
		var guesses = 0;
		
		//Pick a random word from words array
		currentWord = availableWords[Math.floor(Math.random()* words.length)];
		for (var i = 0; i < currentWord.length; i++) {
		blanks[i] = "_";
		}
	}
}

}
})
var userChoice = [];
var availableWords = ["ipa", "stout", "lambic", "gueuze", "kriek"];
var chances = 15;
var letterChoices = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var wrongGuesses = [];
var rightGuesses = [];
var currentWord = availableWords[Math.floor(Math.random() * availableWords.length)];
var blanks = currentWord.split(" ");

console.log(currentWord);

//Making letters appear as underscores
var underScores = [];
for (var i = 0; i < currentWord.length; i++) {
	console.log(underScores[i] = "_");
}

//Letters Guessed Module
document.onkeyup = function(event) {
	var userChoice = event.key;

		if (userChoice > currentWord.indexOf(-1)) {
			rightGuesses.push(userChoice);
			$("#current-word").html("<div>" + rightGuesses + "</div>");
			
			if (rightGuesses === currentWord) { 
			$("#wins").html("<h4>" + wins++ + "</h4>");
			}
		}

		else {
			wrongGuesses.push(userChoice);
			$("#letters-bucket").html("<h4>" + "Letters already guessed<br/>" + wrongGuesses.join(" ") + "</h4>");
		}
}
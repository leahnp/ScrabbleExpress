var Scrabble = function() {
	this.point = {
		'a' : 1,
		'e' : 1,
		'i' : 1,
		'o' : 1,
		'u' : 1,
		'l' : 1,
		'n' : 1,
		'r' : 1,
		's' : 1,
		't' : 1,
		'd' : 2,
		'g' : 2,
		'b' : 3,
		'c' : 3,
		'm' : 3,
		'p' : 3,
		'f' : 4,
		'h' : 4,
		'v' : 4,
		'w' : 4,
		'y' : 4,
		'k' : 5,
		'j' : 8,
		'x' : 8,
		'q' : 10,
		'z' : 10
	};
}

Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

Scrabble.prototype.score = function(word) {
	word = word.toString().toLowerCase();
	var score = 0;
	for (var i = 0; i < word.length; i++) {
		// search word[i], get point at to score
		score += this.point[word[i]]
		}
		// bonus for using 7 tiles
		if (word.length === 7) {
			score += 50;
	}
  return score;
};

Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {
	// placeholder winner
	var winner = arrayOfWords[0];

	for (var word of arrayOfWords) {
		var word_score = this.score(word);

		// assign winning word if word score is larger than current winner
		if (word_score > this.score(winner)) {
			winner = word;
		// if tie, word with 7 tiles wins
		} else if ((word_score == this.score(winner)) && 
							((winner.length == 7) && (word.length != 7))) {
			winner = winner;
		// assign winning word if word score is equal to, but shorter in length than current winner
		} else if (word_score == this.score(winner) && 
							((winner.length > word.length))) {
			winner = word;
		}
	}
	return winner;
}

module.exports = Scrabble;
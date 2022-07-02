function uefaEuro2016(teams, scores) {
	// your code...
	const [team1, team2] = teams;
	const [score1, score2] = scores;
	if (score1 > score2) {
		return `At match ${team1} - ${team2}, ${team1} won!`;
	} else if (score2 > score1) {
		return `At match ${team1} - ${team2}, ${team2} won!`;
	} else {
		return `At match ${team1} - ${team2}, teams played draw. `;
	}
}

console.log(uefaEuro2016(["Portugal", "Iceland"], [1, 1]));

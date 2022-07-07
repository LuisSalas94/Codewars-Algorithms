function duckDuckGoose(players, goose) {
	for (let i = 0; i < players.length; i++) {
		if (i == goose - 1) {
			return players[i];
		}
	}
}

const players = ["a", "b", "c", "d"];
const goose = 4;

console.log(duckDuckGoose(players, goose));

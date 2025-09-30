document.addEventListener('DOMContentLoaded', function() {
	const playerInputs = document.getElementById('player-inputs');
	const addPlayerBtn = document.getElementById('add-player-btn');
	let playerCount = 0;

	function addPlayerField() {
		if (playerCount < 4) {
			playerCount++;
			const input = document.createElement('input');
			input.type = 'text';
			input.name = `player${playerCount}`;
			input.placeholder = `Player ${playerCount} Name`;
			input.required = true;
			playerInputs.appendChild(input);
			playerInputs.appendChild(document.createElement('br'));
		}
		if (playerCount >= 4) {
			addPlayerBtn.disabled = true;
		}
	}

	addPlayerBtn.addEventListener('click', addPlayerField);
});

document.addEventListener('DOMContentLoaded', function () {
    const addPlayerBtn = document.getElementById('add-player-btn');
    const playerInput = document.getElementById('player-input');
    const playerList = document.getElementById('player-list');
    const completeBtn = document.getElementById('complete-btn');
    let players = [];

    addPlayerBtn.addEventListener('click', function () {
        const name = playerInput.value.trim();
        if (name && players.length < 4) {
            players.push({ name: name, points: 0 });

            // Add player to list: name, then controls with minus, points, plus
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="player-name">${name}</span>
                <span style="display: inline-block; min-width: 32px;"></span>
                <span class="player-controls" style="margin-left: 24px;">
                    <button class="minus-btn" style="margin-right:8px;">-</button>
                    <span class="player-points">0</span>
                    <button class="plus-btn" style="margin-left:8px;">+</button>
                </span>
            `;
            playerList.appendChild(li);

            // Event listeners for plus and minus buttons
            const minusBtn = li.querySelector('.minus-btn');
            const plusBtn = li.querySelector('.plus-btn');
            const pointsSpan = li.querySelector('.player-points');

            minusBtn.addEventListener('click', function () {
                let idx = Array.from(playerList.children).indexOf(li);
                if (players[idx].points > 0) {
                    players[idx].points -= 1;
                    pointsSpan.textContent = players[idx].points;
                }
            });

            plusBtn.addEventListener('click', function () {
                let idx = Array.from(playerList.children).indexOf(li);
                players[idx].points += 1;
                pointsSpan.textContent = players[idx].points;
            });

            playerInput.value = '';
        }
    });

    completeBtn.addEventListener('click', function () {
        // Hide input and add button
        playerInput.style.display = 'none';
        addPlayerBtn.style.display = 'none';
        completeBtn.style.display = 'none';

        // Make all player names bold
        document.querySelectorAll('.player-name').forEach(function (span) {
            span.style.fontWeight = 'bold';
        });
    });
});
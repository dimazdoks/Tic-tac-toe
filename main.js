window.addEventListener('load', function () {

    const new_game = document.getElementById('new_game');
    const rows = document.getElementsByClassName('rows');
    const winnerId = document.getElementById('winner');
    var k;

    function initGame() {
        for (var i = rows.length - 1; i >= 0; i--) {
            rows[i].style.backgroundImage = 'none';
        }

        for (var i = rows.length - 1; i >= 0; i--) {
            rows[i].addEventListener('click', nextStroke, false);
        }

        winnerId.innerHTML = '';
        k = 0;
    }

    function killGame(){
        for (var i = rows.length - 1; i >= 0; i--) {
            rows[i].removeEventListener('click', nextStroke, false);
        }
    }

    function sayWinner(winnerTag) {
        if (winnerTag != 'none') {
            if (winnerTag.style.backgroundImage == 'url("src/img/769.png")') {
                winnerId.innerHTML = 'Winner is: X';
                killGame();
            }
            else if (winnerTag.style.backgroundImage == 'url("src/img/Nolik.png")') {
                winnerId.innerHTML = 'Winner is: O';
                killGame();
            }
        }
    }

    function testWhoWinner() {

        //Gorisontals
        if (rows[0].style.backgroundImage == rows[1].style.backgroundImage &&
            rows[1].style.backgroundImage == rows[2].style.backgroundImage)
            sayWinner(rows[0]);

        if (rows[3].style.backgroundImage == rows[4].style.backgroundImage &&
            rows[4].style.backgroundImage == rows[5].style.backgroundImage)
            sayWinner(rows[3]);

        if (rows[6].style.backgroundImage == rows[7].style.backgroundImage &&
            rows[7].style.backgroundImage == rows[8].style.backgroundImage)
            sayWinner(rows[6]);

        //Verticals
        if (rows[0].style.backgroundImage == rows[3].style.backgroundImage &&
            rows[3].style.backgroundImage == rows[6].style.backgroundImage)
            sayWinner(rows[0]);

        if (rows[1].style.backgroundImage == rows[4].style.backgroundImage &&
            rows[4].style.backgroundImage == rows[7].style.backgroundImage)
            sayWinner(rows[1]);

        if (rows[2].style.backgroundImage == rows[5].style.backgroundImage &&
            rows[5].style.backgroundImage == rows[8].style.backgroundImage)
            sayWinner(rows[2]);


        //Diagonals
        if (rows[0].style.backgroundImage == rows[4].style.backgroundImage &&
            rows[4].style.backgroundImage == rows[8].style.backgroundImage)
            sayWinner(rows[0]);

        if (rows[2].style.backgroundImage == rows[4].style.backgroundImage &&
            rows[4].style.backgroundImage == rows[6].style.backgroundImage)
            sayWinner(rows[2]);

    }

    function changeCell(urlIm, cell) {
        if (cell.style.backgroundImage == 'none') {
            cell.style.backgroundImage = urlIm;
            k = !k;

            testWhoWinner();
        }
    }

    function nextStroke() {
        if (!k) {
            changeCell('url("src/img/769.png")', this);
        } else {
            changeCell('url("src/img/Nolik.png")', this);
        }
    }

    new_game.addEventListener('click', function () {
        initGame();
    });

    initGame();
});

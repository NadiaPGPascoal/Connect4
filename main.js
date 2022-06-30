const PLAYER_ONE_COLOR = "player-1";
const PLAYER_TWO_COLOR = "player-2";

let board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
];

let nextPlayer = 1;   // Player 1: 1, Player2: 2
let gameFinished = false;

let boardElement = document.getElementById('board');


let didIWinSimplified = () => {
    //Player 1
    if((board[0][0] === 1 && board[1][0] === 1 && board[2][0] === 1 && board[3][0] ===1) || // Column0
       (board[1][0] === 1 && board[2][0] === 1 && board[3][0] === 1 && board[4][0] ===1) || // Column0
       (board[2][0] === 1 && board[3][0] === 1 && board[4][0] === 1 && board[5][0] ===1) || // Column0
       (board[0][1] === 1 && board[1][1] === 1 && board[2][1] === 1 && board[3][1] ===1) || // Column1
       (board[1][1] === 1 && board[2][1] === 1 && board[3][1] === 1 && board[4][1] ===1) || // Column1
       (board[2][1] === 1 && board[3][1] === 1 && board[4][1] === 1 && board[5][1] ===1) || // Column1
       (board[0][2] === 1 && board[1][2] === 1 && board[2][2] === 1 && board[3][2] ===1) || // Column2
       (board[1][2] === 1 && board[2][2] === 1 && board[3][2] === 1 && board[4][2] ===1) || // Column2
       (board[2][2] === 1 && board[3][2] === 1 && board[4][2] === 1 && board[5][2] ===1) || // Column2
       (board[0][3] === 1 && board[1][3] === 1 && board[2][3] === 1 && board[3][3] ===1) || // Column3
       (board[1][3] === 1 && board[2][3] === 1 && board[3][3] === 1 && board[4][3] ===1) || // Column3
       (board[2][3] === 1 && board[3][3] === 1 && board[4][3] === 1 && board[5][3] ===1) || // Column3
       (board[0][4] === 1 && board[1][4] === 1 && board[2][4] === 1 && board[3][4] ===1) || // Column4
       (board[1][4] === 1 && board[2][4] === 1 && board[3][4] === 1 && board[4][4] ===1) || // Column4
       (board[2][4] === 1 && board[3][4] === 1 && board[4][4] === 1 && board[5][4] ===1) || // Column4
       (board[0][5] === 1 && board[1][5] === 1 && board[2][5] === 1 && board[3][5] ===1) || // Column5
       (board[1][5] === 1 && board[2][5] === 1 && board[3][5] === 1 && board[4][5] ===1) || // Column5
       (board[2][5] === 1 && board[3][5] === 1 && board[4][5] === 1 && board[5][5] ===1) || // Column5
       (board[0][6] === 1 && board[1][6] === 1 && board[2][6] === 1 && board[3][6] ===1) || // Column6
       (board[1][6] === 1 && board[2][6] === 1 && board[3][6] === 1 && board[4][6] ===1) || // Column6
       (board[2][6] === 1 && board[3][6] === 1 && board[4][6] === 1 && board[5][6] ===1) || // Column6
       (board[0][0] === 1 && board[0][1] === 1 && board[0][2] === 1 && board[0][3] ===1) || // Row0
       (board[0][1] === 1 && board[0][2] === 1 && board[0][3] === 1 && board[0][4] ===1) || // Row0
       (board[0][2] === 1 && board[0][3] === 1 && board[0][4] === 1 && board[0][5] ===1) || // Row0
       (board[0][3] === 1 && board[0][4] === 1 && board[0][5] === 1 && board[0][6] ===1) || // Row0
       (board[1][0] === 1 && board[1][1] === 1 && board[1][2] === 1 && board[1][3] ===1) || // Row1
       (board[1][1] === 1 && board[1][2] === 1 && board[1][3] === 1 && board[1][4] ===1) || // Row1
       (board[1][2] === 1 && board[1][3] === 1 && board[1][4] === 1 && board[1][5] ===1) || // Row1
       (board[1][3] === 1 && board[1][4] === 1 && board[1][5] === 1 && board[1][6] ===1) || // Row1 
       (board[2][0] === 1 && board[2][1] === 1 && board[2][2] === 1 && board[2][3] ===1) || // Row2
       (board[2][1] === 1 && board[2][2] === 1 && board[2][3] === 1 && board[2][4] ===1) || // Row2
       (board[2][2] === 1 && board[2][3] === 1 && board[2][4] === 1 && board[2][5] ===1) || // Row2
       (board[2][3] === 1 && board[2][4] === 1 && board[2][5] === 1 && board[2][6] ===1) || // Row2 
       (board[3][0] === 1 && board[3][1] === 1 && board[3][2] === 1 && board[3][3] ===1) || // Row3
       (board[3][1] === 1 && board[3][2] === 1 && board[3][3] === 1 && board[3][4] ===1) || // Row3
       (board[3][2] === 1 && board[3][3] === 1 && board[3][4] === 1 && board[3][5] ===1) || // Row3
       (board[3][3] === 1 && board[3][4] === 1 && board[3][5] === 1 && board[3][6] ===1) || // Row3 
       (board[4][0] === 1 && board[4][1] === 1 && board[4][2] === 1 && board[4][3] ===1) || // Row4
       (board[4][1] === 1 && board[4][2] === 1 && board[4][3] === 1 && board[4][4] ===1) || // Row4
       (board[4][2] === 1 && board[4][3] === 1 && board[4][4] === 1 && board[4][5] ===1) || // Row4
       (board[4][3] === 1 && board[4][4] === 1 && board[4][5] === 1 && board[4][6] ===1) || // Row4 
       (board[5][0] === 1 && board[5][1] === 1 && board[5][2] === 1 && board[5][3] ===1) || // Row5
       (board[5][4] === 1 && board[5][3] === 1 && board[5][2] === 1 && board[5][4] ===1) || // Row5
       (board[5][2] === 1 && board[5][3] === 1 && board[5][4] === 1 && board[5][5] ===1) || // Row5
       (board[5][3] === 1 && board[5][4] === 1 && board[5][5] === 1 && board[5][6] ===1) || // Row5
       (board[0][0] === 1 && board[1][1] === 1 && board[2][2] === 1 && board[3][3] ===1) || // Diagonal - Bottom - Left
       (board[1][1] === 1 && board[2][2] === 1 && board[3][3] === 1 && board[4][4] ===1) || // Diagonal - Bottom - Left
       (board[2][2] === 1 && board[3][3] === 1 && board[4][4] === 1 && board[5][5] ===1) || // Diagonal - Bottom - Left
       (board[0][6] === 1 && board[1][5] === 1 && board[2][4] === 1 && board[3][3] ===1) || // Diagonal - Bottom - Right
       (board[1][5] === 1 && board[2][4] === 1 && board[3][3] === 1 && board[4][2] ===1) || // Diagonal - Bottom - Right
       (board[2][4] === 1 && board[3][3] === 1 && board[4][2] === 1 && board[5][1] ===1) || // Diagonal - Bottom - Right    
       (board[5][0] === 1 && board[4][1] === 1 && board[3][2] === 1 && board[2][3] ===1) || // Diagonal - Up - Left
       (board[4][1] === 1 && board[3][2] === 1 && board[2][3] === 1 && board[1][4] ===1) || // Diagonal - Up - Left
       (board[3][2] === 1 && board[2][3] === 1 && board[1][4] === 1 && board[0][5] ===1) || // Diagonal - Up - Left
       (board[5][6] === 1 && board[4][5] === 1 && board[3][4] === 1 && board[2][3] ===1) || // Diagonal - Up - Right
       (board[4][5] === 1 && board[3][4] === 1 && board[2][3] === 1 && board[1][2] ===1) || // Diagonal - Up - Right
       (board[3][4] === 1 && board[2][3] === 1 && board[1][2] === 1 && board[0][1] ===1) || // Diagonal - Up - Right
       (board[1][0] === 1 && board[2][1] === 1 && board[3][2] === 1 && board[4][3] ===1) || // Diagonal - Bottom - Left > Right
       (board[2][1] === 1 && board[3][2] === 1 && board[4][3] === 1 && board[5][4] ===1) || // Diagonal - Bottom - Left > Right
       (board[2][0] === 1 && board[3][1] === 1 && board[4][2] === 1 && board[5][3] ===1) || // Diagonal - Bottom - Left > Right
       (board[0][2] === 1 && board[1][3] === 1 && board[2][4] === 1 && board[3][5] ===1) || // Diagonal - Bottom - Left > Right
       (board[1][3] === 1 && board[2][4] === 1 && board[3][5] === 1 && board[4][6] ===1) || // Diagonal - Bottom - Left > Right
       (board[0][3] === 1 && board[1][4] === 1 && board[2][5] === 1 && board[3][6] ===1) || // Diagonal - Bottom - Left > Right
       (board[4][0] === 1 && board[3][1] === 1 && board[2][2] === 1 && board[1][3] ===1) || // Diagonal - Up - Left > Right
       (board[3][1] === 1 && board[2][2] === 1 && board[1][3] === 1 && board[0][4] ===1) || // Diagonal - Up - Left > Right
       (board[3][0] === 1 && board[2][1] === 1 && board[1][2] === 1 && board[0][3] ===1) || // Diagonal - Up - Left > Right
       (board[5][2] === 1 && board[4][3] === 1 && board[3][4] === 1 && board[2][5] ===1) || // Diagonal - Up - Left > Right
       (board[4][3] === 1 && board[3][4] === 1 && board[2][5] === 1 && board[1][6] ===1) || // Diagonal - Up - Left > Right
       (board[5][3] === 1 && board[4][4] === 1 && board[3][5] === 1 && board[2][6] ===1)) { // Diagonal - Up - Left > Right   
        alert('Player yellow won! Congrats!');
        gameFinished = true;
        boardElement.className = 'board game-finished';
    }
   
    //Player 2
    if((board[0][0] === 2 && board[1][0] === 2 && board[2][0] === 2 && board[3][0] ===2) || // Column0
       (board[1][0] === 2 && board[2][0] === 2 && board[3][0] === 2 && board[4][0] ===2) || // Column0
       (board[2][0] === 2 && board[3][0] === 2 && board[4][0] === 2 && board[5][0] ===2) || // Column0
       (board[0][1] === 2 && board[1][1] === 2 && board[2][1] === 2 && board[3][1] ===2) || // Column1
       (board[1][1] === 2 && board[2][1] === 2 && board[3][1] === 2 && board[4][1] ===2) || // Column1
       (board[2][1] === 2 && board[3][1] === 2 && board[4][1] === 2 && board[5][1] ===2) || // Column1
       (board[0][2] === 2 && board[1][2] === 2 && board[2][2] === 2 && board[3][2] ===2) || // Column2
       (board[1][2] === 2 && board[2][2] === 2 && board[3][2] === 2 && board[4][2] ===2) || // Column2
       (board[2][2] === 2 && board[3][2] === 2 && board[4][2] === 2 && board[5][2] ===2) || // Column2
       (board[0][3] === 2 && board[1][3] === 2 && board[2][3] === 2 && board[3][3] ===2) || // Column3
       (board[1][3] === 2 && board[2][3] === 2 && board[3][3] === 2 && board[4][3] ===2) || // Column3
       (board[2][3] === 2 && board[3][3] === 2 && board[4][3] === 2 && board[5][3] ===2) || // Column3
       (board[0][4] === 2 && board[1][4] === 2 && board[2][4] === 2 && board[3][4] ===2) || // Column4
       (board[1][4] === 2 && board[2][4] === 2 && board[3][4] === 2 && board[4][4] ===2) || // Column4
       (board[2][4] === 2 && board[3][4] === 2 && board[4][4] === 2 && board[5][4] ===2) || // Column4
       (board[0][5] === 2 && board[1][5] === 2 && board[2][5] === 2 && board[3][5] ===2) || // Column5
       (board[1][5] === 2 && board[2][5] === 2 && board[3][5] === 2 && board[4][5] ===2) || // Column5
       (board[2][5] === 2 && board[3][5] === 2 && board[4][5] === 2 && board[5][5] ===2) || // Column5
       (board[0][6] === 2 && board[1][6] === 2 && board[2][6] === 2 && board[3][6] ===2) || // Column6
       (board[1][6] === 2 && board[2][6] === 2 && board[3][6] === 2 && board[4][6] ===2) || // Column6
       (board[2][6] === 2 && board[3][6] === 2 && board[4][6] === 2 && board[5][6] ===2) || // Column6
       (board[0][0] === 2 && board[0][1] === 2 && board[0][2] === 2 && board[0][3] ===2) || // Row0
       (board[0][1] === 2 && board[0][2] === 2 && board[0][3] === 2 && board[0][4] ===2) || // Row0
       (board[0][2] === 2 && board[0][3] === 2 && board[0][4] === 2 && board[0][5] ===2) || // Row0
       (board[0][3] === 2 && board[0][4] === 2 && board[0][5] === 2 && board[0][6] ===2) || // Row0
       (board[1][0] === 2 && board[1][1] === 2 && board[1][2] === 2 && board[1][3] ===2) || // Row1
       (board[1][1] === 2 && board[1][2] === 2 && board[1][3] === 2 && board[1][4] ===2) || // Row1
       (board[1][2] === 2 && board[1][3] === 2 && board[1][4] === 2 && board[1][5] ===2) || // Row1
       (board[1][3] === 2 && board[1][4] === 2 && board[1][5] === 2 && board[1][6] ===2) || // Row1 
       (board[2][0] === 2 && board[2][1] === 2 && board[2][2] === 2 && board[2][3] ===2) || // Row2
       (board[2][1] === 2 && board[2][2] === 2 && board[2][3] === 2 && board[2][4] ===2) || // Row2
       (board[2][2] === 2 && board[2][3] === 2 && board[2][4] === 2 && board[2][5] ===2) || // Row2
       (board[2][3] === 2 && board[2][4] === 2 && board[2][5] === 2 && board[2][6] ===2) || // Row2 
       (board[3][0] === 2 && board[3][1] === 2 && board[3][2] === 2 && board[3][3] ===2) || // Row3
       (board[3][1] === 2 && board[3][2] === 2 && board[3][3] === 2 && board[3][4] ===2) || // Row3
       (board[3][2] === 2 && board[3][3] === 2 && board[3][4] === 2 && board[3][5] ===2) || // Row3
       (board[3][3] === 2 && board[3][4] === 2 && board[3][5] === 2 && board[3][6] ===2) || // Row3 
       (board[4][0] === 2 && board[4][1] === 2 && board[4][2] === 2 && board[4][3] ===2) || // Row4
       (board[4][1] === 2 && board[4][2] === 2 && board[4][3] === 2 && board[4][4] ===2) || // Row4
       (board[4][2] === 2 && board[4][3] === 2 && board[4][4] === 2 && board[4][5] ===2) || // Row4
       (board[4][3] === 2 && board[4][4] === 2 && board[4][5] === 2 && board[4][6] ===2) || // Row4 
       (board[5][0] === 2 && board[5][1] === 2 && board[5][2] === 2 && board[5][3] ===2) || // Row5
       (board[5][4] === 2 && board[5][3] === 2 && board[5][2] === 2 && board[5][4] ===2) || // Row5
       (board[5][2] === 2 && board[5][3] === 2 && board[5][4] === 2 && board[5][5] ===2) || // Row5
       (board[5][3] === 2 && board[5][4] === 2 && board[5][5] === 2 && board[5][6] ===2) || // Row5
       (board[0][0] === 2 && board[1][1] === 2 && board[2][2] === 2 && board[3][3] ===2) || // Diagonal - Bottom - Left
       (board[1][1] === 2 && board[2][2] === 2 && board[3][3] === 2 && board[4][4] ===2) || // Diagonal - Bottom - Left
       (board[2][2] === 2 && board[3][3] === 2 && board[4][4] === 2 && board[5][5] ===2) || // Diagonal - Bottom - Left
       (board[0][6] === 2 && board[1][5] === 2 && board[2][4] === 2 && board[3][3] ===2) || // Diagonal - Bottom - Right
       (board[1][5] === 2 && board[2][4] === 2 && board[3][3] === 2 && board[4][2] ===2) || // Diagonal - Bottom - Right
       (board[2][4] === 2 && board[3][3] === 2 && board[4][2] === 2 && board[5][1] ===2) || // Diagonal - Bottom - Right    
       (board[5][0] === 2 && board[4][1] === 2 && board[3][2] === 2 && board[2][3] ===2) || // Diagonal - Up - Left
       (board[4][1] === 2 && board[3][2] === 2 && board[2][3] === 2 && board[1][4] ===2) || // Diagonal - Up - Left
       (board[3][2] === 2 && board[2][3] === 2 && board[1][4] === 2 && board[0][5] ===2) || // Diagonal - Up - Left
       (board[5][6] === 2 && board[4][5] === 2 && board[3][4] === 2 && board[2][3] ===2) || // Diagonal - Up - Right
       (board[4][5] === 2 && board[3][4] === 2 && board[2][3] === 2 && board[1][2] ===2) || // Diagonal - Up - Right
       (board[3][4] === 2 && board[2][3] === 2 && board[1][2] === 2 && board[0][1] ===2) || // Diagonal - Up - Right
       (board[1][0] === 2 && board[2][1] === 2 && board[3][2] === 2 && board[4][3] ===2) || // Diagonal - Bottom - Left > Right
       (board[2][1] === 2 && board[3][2] === 2 && board[4][3] === 2 && board[5][4] ===2) || // Diagonal - Bottom - Left > Right
       (board[2][0] === 2 && board[3][1] === 2 && board[4][2] === 2 && board[5][3] ===2) || // Diagonal - Bottom - Left > Right
       (board[0][2] === 2 && board[1][3] === 2 && board[2][4] === 2 && board[3][5] ===2) || // Diagonal - Bottom - Left > Right
       (board[1][3] === 2 && board[2][4] === 2 && board[3][5] === 2 && board[4][6] ===2) || // Diagonal - Bottom - Left > Right
       (board[0][3] === 2 && board[1][4] === 2 && board[2][5] === 2 && board[3][6] ===2) || // Diagonal - Bottom - Left > Right
       (board[4][0] === 2 && board[3][1] === 2 && board[2][2] === 2 && board[1][3] ===2) || // Diagonal - Up - Left > Right
       (board[3][1] === 2 && board[2][2] === 2 && board[1][3] === 2 && board[0][4] ===2) || // Diagonal - Up - Left > Right
       (board[3][0] === 2 && board[2][1] === 2 && board[1][2] === 2 && board[0][3] ===2) || // Diagonal - Up - Left > Right
       (board[5][2] === 2 && board[4][3] === 2 && board[3][4] === 2 && board[2][5] ===2) || // Diagonal - Up - Left > Right
       (board[4][3] === 2 && board[3][4] === 2 && board[2][5] === 2 && board[1][6] ===2) || // Diagonal - Up - Left > Right
       (board[5][3] === 2 && board[4][4] === 2 && board[3][5] === 2 && board[2][6] ===2)) { // Diagonal - Up - Left > Right 
        alert('Player red won! Congrats!');
        gameFinished = true;
        boardElement.className = 'board game-finished';
    }
}

// Columns
let column0 = document.getElementById('column-0');
let column1 = document.getElementById('column-1');
let column2 = document.getElementById('column-2');
let column3 = document.getElementById('column-3');
let column4 = document.getElementById('column-4');
let column5 = document.getElementById('column-5');
let column6 = document.getElementById('column-6');

// Column0
let cell00 = document.getElementById('cell-0-0');
let cell10 = document.getElementById('cell-1-0');
let cell20 = document.getElementById('cell-2-0');
let cell30 = document.getElementById('cell-3-0');
let cell40 = document.getElementById('cell-4-0');
let cell50 = document.getElementById('cell-5-0');

// Column1
let cell01 = document.getElementById('cell-0-1');
let cell11 = document.getElementById('cell-1-1');
let cell21 = document.getElementById('cell-2-1');
let cell31 = document.getElementById('cell-3-1');
let cell41 = document.getElementById('cell-4-1');
let cell51 = document.getElementById('cell-5-1');

// Column2
let cell02 = document.getElementById('cell-0-2');
let cell12 = document.getElementById('cell-1-2');
let cell22 = document.getElementById('cell-2-2');
let cell32 = document.getElementById('cell-3-2');
let cell42 = document.getElementById('cell-4-2');
let cell52 = document.getElementById('cell-5-2');

// Column3
let cell03 = document.getElementById('cell-0-3');
let cell13 = document.getElementById('cell-1-3');
let cell23 = document.getElementById('cell-2-3');
let cell33 = document.getElementById('cell-3-3');
let cell43 = document.getElementById('cell-4-3');
let cell53 = document.getElementById('cell-5-3');

// Column4
let cell04 = document.getElementById('cell-0-4');
let cell14 = document.getElementById('cell-1-4');
let cell24 = document.getElementById('cell-2-4');
let cell34 = document.getElementById('cell-3-4');
let cell44 = document.getElementById('cell-4-4');
let cell54 = document.getElementById('cell-5-4');

// Column5
let cell05 = document.getElementById('cell-0-5');
let cell15 = document.getElementById('cell-1-5');
let cell25 = document.getElementById('cell-2-5');
let cell35 = document.getElementById('cell-3-5');
let cell45 = document.getElementById('cell-4-5');
let cell55 = document.getElementById('cell-5-5');

// Column6
let cell06 = document.getElementById('cell-0-6');
let cell16 = document.getElementById('cell-1-6');
let cell26 = document.getElementById('cell-2-6');
let cell36 = document.getElementById('cell-3-6');
let cell46 = document.getElementById('cell-4-6');
let cell56 = document.getElementById('cell-5-6');

column0.addEventListener('click', () => {
    // cell00.innerHTML = nextPlayer === 1 ? PLAYER_ONE_SYMBOL : PLAYER_TWO_SYMBOL;
    // nextPlayer = nextPlayer === 1 ? 2 : 1;
    if(board[0][0] === 0 && gameFinished === false) {
        board[0][0] = nextPlayer;

        if(nextPlayer === 1) {
            cell00.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell00.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else if(board[1][0] === 0 && gameFinished === false) {
        board [1][0] = nextPlayer; 

        if(nextPlayer === 1) {
            cell10.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell10.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else if(board[2][0] === 0 && gameFinished === false) {
        board [2][0] = nextPlayer; 

        if(nextPlayer === 1) {
            cell20.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell20.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else if(board[3][0] === 0 && gameFinished === false) {
        board [3][0] = nextPlayer; 

        if(nextPlayer === 1) {
            cell30.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell30.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else if(board[4][0] === 0 && gameFinished === false) {
        board [4][0] = nextPlayer; 

        if(nextPlayer === 1) {
            cell40.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell40.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else if(board[5][0] === 0 && gameFinished === false) {
        board [5][0] = nextPlayer; 

        if(nextPlayer === 1) {
            cell50.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell50.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else {
        alert('Invalid play!');
    }
    didIWinSimplified();
})

column1.addEventListener('click', () => {
    // cell00.innerHTML = nextPlayer === 1 ? PLAYER_ONE_SYMBOL : PLAYER_TWO_SYMBOL;
    // nextPlayer = nextPlayer === 1 ? 2 : 1;
    if(board[0][1] === 0 && gameFinished === false) {
        board[0][1] = nextPlayer;

        if(nextPlayer === 1) {
            cell01.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell01.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else if(board[1][1] === 0 && gameFinished === false) {
        board [1][1] = nextPlayer; 

        if(nextPlayer === 1) {
            cell11.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell11.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else if(board[2][1] === 0 && gameFinished === false) {
        board [2][1] = nextPlayer; 

        if(nextPlayer === 1) {
            cell21.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell21.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else if(board[3][1] === 0 && gameFinished === false) {
        board [3][1] = nextPlayer; 

        if(nextPlayer === 1) {
            cell31.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell31.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else if(board[4][1] === 0 && gameFinished === false) {
        board [4][1] = nextPlayer; 

        if(nextPlayer === 1) {
            cell41.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell41.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else if(board[5][1] === 0 && gameFinished === false) {
        board [5][1] = nextPlayer; 

        if(nextPlayer === 1) {
            cell51.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell51.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else {
        alert('Invalid play!');
    }
    didIWinSimplified();
})

column2.addEventListener('click', () => {
    // cell00.innerHTML = nextPlayer === 1 ? PLAYER_ONE_SYMBOL : PLAYER_TWO_SYMBOL;
    // nextPlayer = nextPlayer === 1 ? 2 : 1;
    if(board[0][2] === 0 && gameFinished === false) {
        board[0][2] = nextPlayer;

        if(nextPlayer === 1) {
            cell02.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell02.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else if(board[1][2] === 0 && gameFinished === false) {
        board [1][2] = nextPlayer; 

        if(nextPlayer === 1) {
            cell12.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell12.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else if(board[2][2] === 0 && gameFinished === false) {
        board [2][2] = nextPlayer; 

        if(nextPlayer === 1) {
            cell22.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell22.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else if(board[3][2] === 0 && gameFinished === false) {
        board [3][2] = nextPlayer; 

        if(nextPlayer === 1) {
            cell32.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell32.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else if(board[4][2] === 0 && gameFinished === false) {
        board [4][2] = nextPlayer; 

        if(nextPlayer === 1) {
            cell42.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell42.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else if(board[5][2] === 0 && gameFinished === false) {
        board [5][2] = nextPlayer; 

        if(nextPlayer === 1) {
            cell52.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell52.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else {
        alert('Invalid play!');
    }
    didIWinSimplified();
})

column3.addEventListener('click', () => {
    // cell00.innerHTML = nextPlayer === 1 ? PLAYER_ONE_SYMBOL : PLAYER_TWO_SYMBOL;
    // nextPlayer = nextPlayer === 1 ? 2 : 1;
    if(board[0][3] === 0 && gameFinished === false) {
        board[0][3] = nextPlayer;

        if(nextPlayer === 1) {
            cell03.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell03.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else if(board[1][3] === 0 && gameFinished === false) {
        board [1][3] = nextPlayer; 

        if(nextPlayer === 1) {
            cell13.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell13.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else if(board[2][3] === 0 && gameFinished === false) {
        board [2][3] = nextPlayer; 

        if(nextPlayer === 1) {
            cell23.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell23.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else if(board[3][3] === 0 && gameFinished === false) {
        board [3][3] = nextPlayer; 

        if(nextPlayer === 1) {
            cell33.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell33.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else if(board[4][3] === 0 && gameFinished === false) {
        board [4][3] = nextPlayer; 

        if(nextPlayer === 1) {
            cell43.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell43.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else if(board[5][3] === 0 && gameFinished === false) {
        board [5][3] = nextPlayer; 

        if(nextPlayer === 1) {
            cell53.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell53.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else {
        alert('Invalid play!');
    }
    didIWinSimplified();
})

column4.addEventListener('click', () => {
    // cell00.innerHTML = nextPlayer === 1 ? PLAYER_ONE_SYMBOL : PLAYER_TWO_SYMBOL;
    // nextPlayer = nextPlayer === 1 ? 2 : 1;
    if(board[0][4] === 0 && gameFinished === false) {
        board[0][4] = nextPlayer;

        if(nextPlayer === 1) {
            cell04.className= PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell04.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else if(board[1][4] === 0 && gameFinished === false) {
        board [1][4] = nextPlayer; 

        if(nextPlayer === 1) {
            cell14.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell14.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else if(board[2][4] === 0 && gameFinished === false) {
        board [2][4] = nextPlayer; 

        if(nextPlayer === 1) {
            cell24.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell24.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else if(board[3][4] === 0 && gameFinished === false) {
        board [3][4] = nextPlayer; 

        if(nextPlayer === 1) {
            cell34.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell34.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else if(board[4][4] === 0 && gameFinished === false) {
        board [4][4] = nextPlayer; 

        if(nextPlayer === 1) {
            cell44.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell44.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else if(board[5][4] === 0 && gameFinished === false) {
        board [5][4] = nextPlayer; 

        if(nextPlayer === 1) {
            cell54.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell54.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else {
        alert('Invalid play!');
    }
    didIWinSimplified();
})

column5.addEventListener('click', () => {
    // cell00.innerHTML = nextPlayer === 1 ? PLAYER_ONE_SYMBOL : PLAYER_TWO_SYMBOL;
    // nextPlayer = nextPlayer === 1 ? 2 : 1;
    if(board[0][5] === 0 && gameFinished === false) {
        board[0][5] = nextPlayer;

        if(nextPlayer === 1) {
            cell05.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell05.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else if(board[1][5] === 0 && gameFinished === false) {
        board [1][5] = nextPlayer; 

        if(nextPlayer === 1) {
            cell15.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell15.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else if(board[2][5] === 0 && gameFinished === false) {
        board [2][5] = nextPlayer; 

        if(nextPlayer === 1) {
            cell25.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell25.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else if(board[3][5] === 0 && gameFinished === false) {
        board [3][5] = nextPlayer; 

        if(nextPlayer === 1) {
            cell35.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell35.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else if(board[4][5] === 0 && gameFinished === false) {
        board [4][5] = nextPlayer; 

        if(nextPlayer === 1) {
            cell45.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell45.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else if(board[5][5] === 0 && gameFinished === false) {
        board [5][5] = nextPlayer; 

        if(nextPlayer === 1) {
            cell55.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell55.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else {
        alert('Invalid play!');
    }
    didIWinSimplified();
})

column6.addEventListener('click', () => {
    // cell00.innerHTML = nextPlayer === 1 ? PLAYER_ONE_SYMBOL : PLAYER_TWO_SYMBOL;
    // nextPlayer = nextPlayer === 1 ? 2 : 1;
    if(board[0][6] === 0 && gameFinished === false) {
        board[0][6] = nextPlayer;

        if(nextPlayer === 1) {
            cell06.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell06.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else if(board[1][6] === 0 && gameFinished === false) {
        board [1][6] = nextPlayer; 

        if(nextPlayer === 1) {
            cell16.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell16.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else if(board[2][6] === 0 && gameFinished === false) {
        board [2][6] = nextPlayer; 

        if(nextPlayer === 1) {
            cell26.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell26.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else if(board[3][6] === 0 && gameFinished === false) {
        board [3][6] = nextPlayer; 

        if(nextPlayer === 1) {
            cell36.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell36.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else if(board[4][6] === 0 && gameFinished === false) {
        board [4][6] = nextPlayer; 

        if(nextPlayer === 1) {
            cell46.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell46.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else if(board[5][6] === 0 && gameFinished === false) {
        board [5][6] = nextPlayer; 

        if(nextPlayer === 1) {
            cell56.className = PLAYER_ONE_COLOR;
            nextPlayer = 2;
        } else {
            cell56.className = PLAYER_TWO_COLOR;
            nextPlayer = 1;
        }

    }else {
        alert('Invalid play!');
    }
    didIWinSimplified();
})
// start by creating an empty board with arr of nine cell inside a GameBoard Object

const GameBoard = (() => {

    // array that represents the 3 by 3 board
    let board = ["", "", "", "", "", "", "", "", ""];
    
    // implement function to see the board

    const getBoard = () => board;

    // function to place a mark on the board

    const setCell = (index, mark) => {
        if (index >= 0 && index < 9 && board[index] === "") {
            board[index] = mark;
           
        }
    };

    // function to reset the board

    const resetBoard = () => {
        board = ["", "", "", "", "", "", "", "", ""];
    };

    return { getBoard, setCell, resetBoard }; // return the functions to interact with the board clear


    
})();

    // create player factory function

const Player = (name, mark) => {
    return { name, mark };
}


// playing a turn
const Game = (() => {

    // start with first player
    let currentPlayer = Player("Player 1", "X");

    const playTurn = (index) => {
        if(GameBoard.getBoard()[index] === "") {
            GameBoard.setCell(index, currentPlayer.mark); // place the mark on the board
            showBoard(); // display the board in console
            //checkWinner(); // check for a winner after the move but the game will continue;should not be right

            if (checkWinner()) {
                console.log(`${currentPlayer.name} wins!`);
                GameBoard.resetBoard(); // reset the board for a new game
            }

            switchPlayer(); // switch to the other player 
            return true;
        } else {
            console.log("Cell already occupied! Choose another cell.");
            return false;
        }
    };

    const switchPlayer = () => {
        if (currentPlayer.mark === "X") {
            currentPlayer = Player("Player 2", "O");
        } else {
            currentPlayer = Player("Player 1", "X");
        }
        
    };

    const showBoard = () => {
        console.log(GameBoard.getBoard());
    };
    return { playTurn };

})();

// check winner but first let us create the winning combinations
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// winner checking function
const checkWinner = () => {
    const board = GameBoard.getBoard();   
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            console.log(`Winner is: ${board[a]}`);
            return board[a]; // return the mark of the winner
        }
    }
    return null; // no winner yet
}
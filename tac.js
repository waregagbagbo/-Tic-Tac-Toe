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
        GameBoard.setCell(index, currentPlayer.mark); // place the mark on the board
        switchPlayer(); // switch to the other player 
        showBoard(); // display the board in console
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
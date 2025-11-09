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

play = Player("Alice", "X");
play1 = Player("Bob", "O");


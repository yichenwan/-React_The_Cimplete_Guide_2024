const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({ onSelectSqaure, turns }) {
    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;
        
        gameBoard[row][col] = player;
    };
    // const [gameBoard, setGameBoard] = useState(inittialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const upadetedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         upadetedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return upadetedBoard;
    //     });

    //     onSelectSqaure();
    // }

    return (<ol id="game-board">
        {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
            {row.map((playerSymbol, colIndex) => 
                <li key={colIndex}>
                    <button onClick={() => onSelectSqaure(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                </li>)}
            </ol>
        </li>)}
    </ol>)
}
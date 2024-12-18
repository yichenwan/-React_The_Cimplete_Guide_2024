export default function GameBoard({ onSelectSqaure, board }) {
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
        {board.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
            {row.map((playerSymbol, colIndex) => 
                <li key={colIndex}>
                    <button onClick={() => onSelectSqaure(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                </li>)}
            </ol>
        </li>)}
    </ol>)
}
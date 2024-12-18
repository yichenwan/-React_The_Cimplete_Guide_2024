import { useState } from 'react';

const inittialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({ onSelectSqaure, activePlayerSymbol }) {
    const [gameBoard, setGameBoard] = useState(inittialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const upadetedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            upadetedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return upadetedBoard;
        });

        onSelectSqaure();
    }

    return (<ol id="game-board">
        {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
            {row.map((playerSymbol, colIndex) => 
                <li key={colIndex}>
                    <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                </li>)}
            </ol>
        </li>)}
    </ol>)
}
import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);

    /*

        returns

            X: if X wins
            O: if O wins

            "draw": if it's a draw

            null: if the game hasn't ended yet

    */

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        // finding the winner:
        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[b] === state[c]) {
                return state[a];
            }
        }

        // seeing if the board is full:
        for (let currentState of state) {
            if (currentState == null) {
                return null;
            }
        } 

        return "draw";
    };

    const winner = checkWinner();

    const handleClick = (index) => {
        if (state[index] !== null) {
            return;
        }
        const copyState = [...state];
        copyState[index] = isXTurn ? "X" : "O";
        setState(copyState);
        setIsXTurn(!isXTurn);
    }

    const handleReset = () => {
        setState(Array(9).full(null));
        setIsXTurn(true);
    }

    return (
        <div className="board-container">
            {
                winner ? (winner == "draw" ? <> EVERYONE WON! YAY! </> : <> {winner} WON! YAY! </>) :
                <>
                    <h4> Player { isXTurn ? 'X' : 'O' } please move </h4>
                    <div className="board-row">
                        <Square onClick={() => handleClick(0)} value={state[0]} />
                        <Square onClick={() => handleClick(1)} value={state[1]} />
                        <Square onClick={() => handleClick(2)} value={state[2]} />
                    </div>

                    <div className="board-row">
                        <Square onClick={() => handleClick(3)} value={state[3]} />
                        <Square onClick={() => handleClick(4)} value={state[4]} />
                        <Square onClick={() => handleClick(5)} value={state[5]} />
                    </div>

                    <div className="board-row">
                        <Square onClick={() => handleClick(6)} value={state[6]} />
                        <Square onClick={() => handleClick(7)} value={state[7]} />
                        <Square onClick={() => handleClick(8)} value={state[8]} />
                    </div>
                </>
            }
        </div>
    );
}

export default Board;
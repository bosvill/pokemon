import React from 'react'; 
import { useLoaderData } from 'react-router-dom';

const Game = () => {
    const player1=useLoaderData()
    const player2=useLoaderData()
    console.log(player1)
    console.log(player2)
    return (
        <div>
            <h3>{player1.name}</h3>
        </div>
    );
}

export default Game;

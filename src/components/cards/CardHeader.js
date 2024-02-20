import React, { useContext } from 'react';
import { CardContext } from '../../App';

export default function CardHeader() {
    const {clicked , gameOver  , resetGame} = useContext(CardContext)
    return (
        <div>
            <h1 className="text-center font-extrabold text-white text-6xl my-8 ">Memory Card Game</h1>
            <div className="flex flex-row justify-evenly m-3">
                <p className="text-xl text-slate-100">Score: {clicked.length}</p>
                <p className="font-extrabold text-xl text-slate-100" >
                  {
                  gameOver ?  "GAME OVER 😭😭😭":
                  "PLAY!!! 😋😋" 
                  }
                </p>
                <button 
                onClick={()=>resetGame()}
                className="text-xl text-slate-100 border-4 px-4 hover:border-emerald-400 hover:text-emerald-400 hover:text-2xl">RESET</button>
            </div>
        </div>
    )
}
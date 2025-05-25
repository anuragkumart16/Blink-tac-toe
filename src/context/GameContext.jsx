import React, { useState, createContext, useRef, useEffect } from "react";
import { winCheck } from "../utils/WinCheck";


const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [nextEmoji, setNextEmoji] = useState(null);
  const [turn, setTurn] = useState("player1");
  const [queue, setQueue] = useState([]);
  const [winner, setWinner] = useState(null);
  const [score,setScore] = useState({player1:0,player2:0})
  const [warning,setWarning] = useState(null)
  const [help,setHelp] = useState(false)
  const GameGrid = useRef(null);

  const Cell1 = useRef(null);
  const Cell2 = useRef(null);
  const Cell3 = useRef(null);
  const Cell4 = useRef(null);
  const Cell5 = useRef(null);
  const Cell6 = useRef(null);
  const Cell7 = useRef(null);
  const Cell8 = useRef(null);
  const Cell9 = useRef(null);

  const CellArray = [
    Cell1,
    Cell2,
    Cell3,
    Cell4,
    Cell5,
    Cell6,
    Cell7,
    Cell8,
    Cell9,
  ];

  // win Check 
  useEffect(() => {
    const result = winCheck(CellArray, turn);
    if (result[0]) {
      setWinner(winCheck(CellArray, turn)[1]);
    }
  }, [turn, CellArray, winner]);

  // queue handler
  useEffect(()=>{
    if (queue.length > 6){
      queue[0].innerHTML = null
      queue.shift()
      setQueue(queue)
    }
  },[queue,setQueue])

  return (
    <GameContext.Provider
      value={{
        nextEmoji,
        setNextEmoji,
        turn,
        setTurn,
        queue,
        setQueue,
        GameGrid,
        CellArray,
        winner,
        setWinner,
        score,
        setScore,
        warning,
        setWarning,
        help,
        setHelp
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };

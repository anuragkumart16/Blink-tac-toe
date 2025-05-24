import React,{useState,createContext} from "react";

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [nextEmoji, setNextEmoji] = useState(null);
  const [turn, setTurn] = useState('player1');
  const [queue, setQueue] = useState([]);

  return (
    <GameContext.Provider value={{ nextEmoji, setNextEmoji, turn, setTurn, queue, setQueue }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };

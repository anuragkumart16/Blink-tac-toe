import React, { useEffect, useContext } from "react";
import { GameContext } from "../../context/GameContext";

function EmojiTeller() {
  const { setNextEmoji, turn , nextEmoji } = useContext(GameContext);

  useEffect(() => {
    if (turn === "player1") {
        const array = localStorage.getItem('firstPlayerEmoji').split(',')
        Math.floor(Math.random() * array.length)
        setNextEmoji(array[Math.floor(Math.random() * array.length)])
    }else{
        const array = localStorage.getItem('secondPlayerEmoji').split(',')
        Math.floor(Math.random() * array.length)
        setNextEmoji(array[Math.floor(Math.random() * array.length)])
    }
    console.log(nextEmoji)
  }, [turn,setNextEmoji,nextEmoji]);
  return (
    <div className="turn-teller" style={{ marginTop: "1rem" }}>
      Next emoji: {nextEmoji}
    </div>
  );
}

export default EmojiTeller;

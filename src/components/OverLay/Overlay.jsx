import Button from "../../components/Button/Button";
import React, { useEffect, useState } from "react";
import "./overlay.css";
import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import { useNavigate } from "react-router-dom";
import { resetCells } from "../../utils/reset";
import { motion } from "framer-motion";

function Overlay() {
  const navigate = useNavigate();
  const {
    winner,
    setWinner,
    setTurn,
    setNextEmoji,
    CellArray,
    setScore,
    setQueue,
  } = useContext(GameContext);
  const [playerName, setPlayerName] = useState("");

  function handleRematch() {
    if (winner === "Player1") {
      setScore((score) => ({ ...score, player1: score.player1 + 1 }));
    } else {
      setScore((score) => ({ ...score, player2: score.player2 + 1 }));
    }
    setQueue([]);
    setNextEmoji(null);
    setTurn("player1");
    resetCells(CellArray);
    setWinner(null);
  }

  function handleQuit() {
    setQueue([]);
    setScore({ player1: 0, player2: 0 });
    setNextEmoji(null);
    setTurn("player1");
    resetCells(CellArray);
    setWinner(null);
    navigate("/");
  }

  useEffect(() => {
    if (winner === "Player1") {
      setPlayerName(localStorage.getItem("firstPlayerName"));
    } else {
      setPlayerName(localStorage.getItem("secondPlayerName"));
    }
  }, [winner]);

  return (
    <motion.div
      className="overlay"
      initial={{ opacity: 0, y: 1000 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="message-holder">
        <h3>Player {playerName} wins!</h3>
        <Button
          style={{ border: "1px solid #ed6e25" }}
          onclick={() => {
            handleRematch();
          }}
        >
          Rematch!
        </Button>
        <Button
          style={{ border: "1px solid #ed6e25" }}
          onclick={() => {
            handleQuit();
          }}
        >
          Quit
        </Button>
      </div>
    </motion.div>
  );
}

export default Overlay;

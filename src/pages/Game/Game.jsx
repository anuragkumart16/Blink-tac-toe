import React, { useContext, useEffect } from "react";
import "./game.css";
import PlayerHolder from "../../components/PlayerHolder/PlayerHolder";
import GameGrid from "../../components/GameGrid/GameGrid";
import Scoreboard from "../../components/Scoreboard/Scoreboard";
import GameControls from "../../components/GameControls/GameControls";
import { GameContext } from "../../context/GameContext";
import Overlay from "../../components/OverLay/Overlay";
import Warning from "../../components/Warning/Warning";
import { motion } from "framer-motion";


function Game() {
  const { winner, warning } = useContext(GameContext);



  return (
    <motion.div
      className="screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {winner && <Overlay winner={winner} />}
      {warning && <Warning />}

      <div className="game-div">
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <Scoreboard className="ScoreBoard" />
          <PlayerHolder
            playerName={localStorage.getItem("firstPlayerName")}
            playerEmoji={localStorage.getItem("firstPlayerEmoji").split(",")}
            align="flex-end"
            activePlayer="player2"
          />
        </div>

        <GameGrid />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
          }}
        >
          <PlayerHolder
            playerName={localStorage.getItem("secondPlayerName")}
            playerEmoji={localStorage.getItem("secondPlayerEmoji").split(",")}
            align="flex-start"
            activePlayer="player1"
          />
          <GameControls />
        </div>
      </div>
    </motion.div>
  );
}

export default Game;

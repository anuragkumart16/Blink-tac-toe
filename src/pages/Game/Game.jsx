import React,{useContext} from "react";
import "./game.css";
import PlayerHolder from "../../components/PlayerHolder/PlayerHolder";
import GameGrid from "../../components/GameGrid/GameGrid";
import Scoreboard from "../../components/Scoreboard/Scoreboard";
import GameControls from "../../components/GameControls/GameControls";
import { GameContext } from "../../context/GameContext";
import Overlay from "../../components/OverLay/Overlay";
import Warning from "../../components/Warning/Warning";

function Game() {
  const {winner,warning} = useContext(GameContext)
  return (
    <div className="screen">
      {winner && <Overlay winner={winner}/>}
      {warning && <Warning/>}

      <div className="game-div">

        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <Scoreboard />
          <PlayerHolder
            playerName={localStorage.getItem("firstPlayerName")}
            playerEmoji={localStorage.getItem("firstPlayerEmoji").split(",")}
            align="flex-end"
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
          />
          <GameControls/>
        </div>
      </div>
    </div>
  );
}

export default Game;

import React, { useContext } from "react";
import Button from "../../components/Button/Button";
import "./help.css";
import { IoCloseOutline } from "react-icons/io5";
import { GameContext } from "../../context/GameContext";
import { motion } from "framer-motion";

function Help() {
  const { setHelp } = useContext(GameContext);
  return (
    <motion.div
      className="overlay"
      initial={{ opacity: 0, y: 1000 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="help-holder">
        <Button
          onclick={() => {
            setHelp(false);
          }}
          style={{
            border: "1px solid #ed6e25",
            padding: "0.5rem",
            width: "fit-content",
            paddingBottom: "0",
            alignSelf: "flex-end",
            position: "absolute",
            top: "1rem",
            right: "1rem",
          }}
        >
          <IoCloseOutline color="black" size={30} />
        </Button>
        <h2>🎯 Objective</h2>
        <p>
          Form a line of 3 of your emojis (horizontal, vertical, or diagonal)
          before your opponent.
        </p>

        <h2>🔄 Turn-Based Play</h2>
        <p>
          Two players take turns: Player 1 starts, then Player 2. On each turn,
          a player places their emoji on any empty cell.
        </p>

        <h2>🎭 Vanishing Rule</h2>
        <ul>
          <li>Max 3 emojis per player on the board.</li>
          <li>On placing a 4th emoji, the oldest one is removed (FIFO).</li>
          <li>New emoji can't be placed where the oldest was.</li>
          <li>Removed cell becomes reusable.</li>
        </ul>

        <h2>🏆 Winning Condition</h2>
        <p>
          Make a straight line of 3 of your own emojis — horizontal, vertical,
          or diagonal.
        </p>

        <h2>🛑 Game End</h2>
        <p>Game continues until someone wins. Draws aren't possible.</p>
        <p>After win: Show “Player X Wins!” and a “Play Again” button.</p>
      </div>
    </motion.div>
  );
}

export default Help;

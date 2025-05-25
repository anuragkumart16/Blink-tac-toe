import React,{useContext} from "react";
import Button from "../../components/Button/Button";
import { Divider } from "@mui/material";
import "./gamecontrols.css";
import { useNavigate } from "react-router-dom";
import { FcIdea } from "react-icons/fc";
import { GameContext } from "../../context/GameContext";

function GameControls() {
  const navigate = useNavigate();
  const {setHelp} = useContext(GameContext)
  return (
    <div
      style={{ display: "flex", flexDirection: "column",alignItems:'flex-end',gap:'0.5rem' }}
    >
      <div
        style={{
          backgroundColor: "white",
          paddingTop: "0.5rem",
          paddingLeft: "0.5rem",
          paddingRight: "0.5rem",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      >
        <FcIdea size={40} onClick={() => setHelp(true)} />
      </div>
      <div className="game-controls">
        <Button
          style={{ color: "#ed6e25" }}
          onclick={() => {
            navigate("/profile");
          }}
        >
          Reset
        </Button>
        <Divider orientation="vertical" flexItem sx={{ width: "2px" }} />
        <Button
          style={{ color: "#ed6e25" }}
          onclick={() => {
            navigate("/");
          }}
        >
          Quit
        </Button>
      </div>
    </div>
  );
}

export default GameControls;

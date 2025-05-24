import React,{useContext} from 'react'
import './scoreboard.css'
import { GameContext } from '../../context/GameContext'

function Scoreboard() {
  const {score} = useContext(GameContext)
  return (
    <div className='scoreboard'>
      {localStorage.getItem("firstPlayerName")} : {score.player1 ||0}
      <br></br>
      {localStorage.getItem("secondPlayerName")} : {score.player2 ||0}
    </div>
  )
}

export default Scoreboard

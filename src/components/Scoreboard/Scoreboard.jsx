import React from 'react'
import './scoreboard.css'

function Scoreboard() {
  return (
    <div className='scoreboard'>
      {localStorage.getItem("firstPlayerName")} : {localStorage.getItem("firstPlayerScore")||0}
      <br></br>
      {localStorage.getItem("secondPlayerName")} : {localStorage.getItem("secondPlayerScore")||0}
    </div>
  )
}

export default Scoreboard

import React, { useContext } from 'react'
import './cell.css'
import { GameContext } from '../../context/GameContext'
function Cell({ children, style , reference}) {
  const { nextEmoji, setTurn, turn } = useContext(GameContext)
  function handleClick(e) {
    e.target.innerHTML = nextEmoji
    if (turn === 'player1') {
      setTurn('player2')
    } else {
      setTurn('player1')
    }
  }
  return (
    <div className='cell' style={style} onClick={handleClick} ref={reference}>
      {children}
    </div>
  )
}

export default Cell

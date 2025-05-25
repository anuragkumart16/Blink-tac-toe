import React, { useContext } from 'react'
import './cell.css'
import { GameContext } from '../../context/GameContext'
function Cell({ children, style , reference}) {
  const { nextEmoji, setTurn, turn,setQueue ,setWarning} = useContext(GameContext)
  function handleClick(e) {
    if (e.target.innerHTML) {
        setWarning("Cell is already filled, you can't occupy it again!")
    }
    else{
      if (!nextEmoji) {
        return
      }
    e.target.innerHTML = nextEmoji
    if (turn === 'player1') {
      setTurn('player2')
    } else {
      setTurn('player1')
    }
    setQueue(queue => [...queue,e.target])
    }
  }
  return (
    <div className='cell' style={style} onClick={handleClick} ref={reference}>
      {children}
    </div>
  )
}

export default Cell

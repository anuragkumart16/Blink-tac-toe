import React,{useContext, useEffect,useState} from 'react'
import './turnteller.css'
import { GameContext } from '../../context/GameContext'

function TurnTeller() {
  const {turn} = useContext(GameContext)
  const [player,setPlayer] = useState(localStorage.getItem('firstPlayerName'))

  useEffect(() => {
    if(turn === 'player1'){
    setPlayer(localStorage.getItem('firstPlayerName'))
    }else{
    setPlayer(localStorage.getItem('secondPlayerName'))
    }
  },[turn])
  
  return (
    <div className='turn-teller'>
      {player}'s turn 
    </div>
  )
}

export default TurnTeller

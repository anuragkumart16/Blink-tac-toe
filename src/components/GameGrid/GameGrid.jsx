import React,{useContext} from 'react'
import './gamegird.css'
import Cell from '../Cell/Cell'
import { Divider } from '@mui/material'
import TurnTeller from '../TurnTeller/TurnTeller'
import EmojiTeller from '../EmojiTeller/EmojiTeller'
import { GameContext } from '../../context/GameContext'
function GameGrid() {
    const size = '8px'
    const {GameGrid,CellArray} = useContext(GameContext)
  return (
    <div className='game-grid' style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
        <TurnTeller/>
      <div className='game-grid' ref={GameGrid}>
        <div>
        <Cell reference={CellArray[0]}></Cell>
        <Divider orientation="horizontal" flexItem sx={{ height: size }} />
        <Cell reference={CellArray[3]}></Cell>
        <Divider orientation="horizontal" flexItem sx={{ height: size }} />
        <Cell reference={CellArray[6]}></Cell>
      </div>
        <Divider orientation="vertical" flexItem  sx={{ width: size }} />
      <div>
        <Cell reference={CellArray[1]}></Cell>
        <Divider orientation="horizontal" flexItem sx={{ height: size }} />
        <Cell reference={CellArray[4]}></Cell>
        <Divider orientation="horizontal" flexItem sx={{ height: size }} />
        <Cell reference={CellArray[7]}></Cell>
      </div>
       <Divider orientation="vertical" flexItem sx={{ width: size }} />
      <div>
        <Cell reference={CellArray[2]}></Cell>
        <Divider orientation="horizontal" flexItem sx={{ height: size }}  />
        <Cell reference={CellArray[5]}></Cell>
        <Divider orientation="horizontal" flexItem sx={{ height: size }} />
        <Cell reference={CellArray[8]}></Cell>
      </div>
      </div>
      <EmojiTeller/>
      
    </div>
  )
}

export default GameGrid

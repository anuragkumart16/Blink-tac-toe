import React from 'react'
import './gamegird.css'
import Cell from '../Cell/Cell'
import { Divider } from '@mui/material'
import TurnTeller from '../TurnTeller/TurnTeller'
import EmojiTeller from '../EmojiTeller/EmojiTeller'
function GameGrid() {
    const size = '8px'
  return (
    <div className='game-grid' style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
        <TurnTeller/>
      <div className='game-grid'>
        <div>
        <Cell></Cell>
        <Divider orientation="horizontal" flexItem sx={{ height: size }} />
        <Cell></Cell>
        <Divider orientation="horizontal" flexItem sx={{ height: size }} />
        <Cell></Cell>
      </div>
        <Divider orientation="vertical" flexItem  sx={{ width: size }} />
      <div>
        <Cell></Cell>
        <Divider orientation="horizontal" flexItem sx={{ height: size }} />
        <Cell></Cell>
        <Divider orientation="horizontal" flexItem sx={{ height: size }} />
        <Cell></Cell>
      </div>
       <Divider orientation="vertical" flexItem sx={{ width: size }} />
      <div>
        <Cell></Cell>
        <Divider orientation="horizontal" flexItem sx={{ height: size }}  />
        <Cell></Cell>
        <Divider orientation="horizontal" flexItem sx={{ height: size }} />
        <Cell></Cell>
      </div>
      </div>
      <EmojiTeller/>
      
    </div>
  )
}

export default GameGrid

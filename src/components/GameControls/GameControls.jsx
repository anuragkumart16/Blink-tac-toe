import React from 'react'
import Button from "../../components/Button/Button";
import { Divider } from '@mui/material';
import './gamecontrols.css'
import { useNavigate } from 'react-router-dom';

function GameControls() {
    const navigate = useNavigate();
  return (
    <div className='game-controls'>
      <Button style={{color:'#ed6e25'}} onclick={()=>{navigate('/profile')}}>Reset</Button>
      <Divider orientation="vertical" flexItem  sx={{ width: '2px' }} />
      <Button style={{color:'#ed6e25'}} onclick={()=>{navigate('/')}}>Quit</Button>
    </div>
  )
}

export default GameControls

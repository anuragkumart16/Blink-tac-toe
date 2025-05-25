import React,{useContext} from 'react'
import Button from '../../components/Button/Button'
import { GameContext } from '../../context/GameContext'

function Warning() {
    const {warning,setWarning} = useContext(GameContext)
  return (
     <div className='overlay'>
      <div className='message-holder'>
            <h3>{warning}</h3>
            <Button style={{border: '1px solid #ed6e25'}} onclick={()=>{setWarning(null)}}>Okay</Button>
      </div>
    </div>
  )
}

export default Warning

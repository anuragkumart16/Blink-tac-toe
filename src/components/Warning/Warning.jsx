import React,{useContext} from 'react'
import Button from '../../components/Button/Button'
import { GameContext } from '../../context/GameContext'
import { motion } from 'framer-motion'

function Warning() {
    const {setWarning} = useContext(GameContext)
  return (
     <motion.div className='overlay'
     initial={{ opacity: 0,y:1000 }}
      animate={{ opacity: 1,y:0 }}
      transition={{ duration: 0.3 }}>
      <div className='message-holder'>
            <h3>Cell is already filled!</h3>
            <Button style={{border: '1px solid #ed6e25'}} onclick={()=>{setWarning(null)}}>Okay</Button>
      </div>
    </motion.div>
  )
}

export default Warning

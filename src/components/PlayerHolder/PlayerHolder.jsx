import React from 'react'
import './playerholder.css'

function PlayerHolder({playerName,playerEmoji,align}) {
  return (
    <div style={{display:"flex",flexDirection:"column",width:"100%",alignItems:align}}>
        {align ==='flex-end' ? <div className={align === 'flex-end' ? 'RightNameHolder' : 'LeftNameHolder'}>Player Name: {playerName}</div> :
         <div className={align === 'flex-end' ? 'RightEmojiHolder' : 'LeftEmojiHolder'}>
            {
                playerEmoji.map((emoji,id)=><span key={id} style={{display:"inline",margin:"0.5rem"}}>{emoji}</span>)
            }
        </div>}
        {align !=='flex-end' ? <div className={align === 'flex-end' ? 'RightNameHolder' : 'LeftNameHolder'}>Player Name: {playerName}</div> :
         <div className={align === 'flex-end' ? 'RightEmojiHolder' : 'LeftEmojiHolder'}>
            {
                playerEmoji.map((emoji,id)=><span key={id} style={{display:"inline",margin:"0.5rem"}}>{emoji}</span>)
            }
        </div>}
    </div>
  )
}

export default PlayerHolder

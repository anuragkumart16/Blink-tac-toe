import React from 'react'
import './cell.css'
function Cell({children,style}) {
  return (
    <div className='cell' style={style}>
      {children}
    </div>
  )
}

export default Cell

import './button.css'
import React from 'react'

function button({children,onclick,style}) {
  return (
    <button className='btn' style={style} onClick={onclick}>{children}</button>
  )
}

export default button

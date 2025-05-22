import './button.css'
import React from 'react'

function button({children,onclick}) {
  return (
    <button className='btn' onClick={onclick}>{children}</button>
  )
}

export default button

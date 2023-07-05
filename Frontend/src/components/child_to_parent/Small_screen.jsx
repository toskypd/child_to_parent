import React, { useState } from 'react'

export default function Small_screen({onColorChange}) {
  const [color, setColor] =useState('')
  const changeColor =(e) => {
    let name = e.target.value;
    setColor(name)
    onColorChange(name)
  }

  return (
    <div className='small_box' style={{marginTop: '10px'}}>
        <input style={{padding: "5px"}} className='input_small' type="text"
        onInput={changeColor}
        placeholder='write any color name...'
        />
    </div>
  )
}

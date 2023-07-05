import React, { useState } from 'react'
import Big_screen from './Big_screen'
import Small_screen from './Small_screen'

export default function Main_Screen() {
  const [color, setColor] = useState('');

  const handleColorChange = (name) => {
    setColor(name)
  }
  return (
    <>
    <div className="Main" style={{    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh'
    
    }}>
    <h2 style={{color: color === "" ? 'gray' :  color}}>Passing data from child to parent</h2>
    <Big_screen color={color}/>
    <Small_screen onColorChange={handleColorChange}/>
    </div>
    
    </>
  )
}

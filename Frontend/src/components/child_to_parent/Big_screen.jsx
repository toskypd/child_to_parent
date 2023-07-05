import React from 'react'

export default function Big_screen({color}) {
  return (
    <div className='big_box' style={{width: '200px', height: '300px', border: `1px solid gray`,
    background: color
  }}></div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Mushroom() {
  return (
    <div>
      <ul className='flex flex-col gap-3'>
        <li><Link className='text-2xl text-blue-900 ' to="/mushroom_prajatiya">1.विभिन्न मशरूम प्रजातियों </Link></li>
        <li><Link className='text-2xl text-blue-900 ' to='/mushroombeej'>2.मशरूम बीज </Link></li>
       
        </ul>
    </div>
  )
}

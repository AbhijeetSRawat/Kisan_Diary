import React from 'react'
import { Link } from 'react-router-dom'

export default function Jaivik() {
  return (
    <div>
         <ul className='flex flex-col gap-3'>
        <li><Link className='text-2xl text-blue-900 ' to="/jaivikkheti"> 1.जैविक खेती</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/jaivikrog"> 2.जैविक खेती में कीट एवं रोग प्रबन्ध</Link></li>
       
        </ul>
    </div>
  )
}

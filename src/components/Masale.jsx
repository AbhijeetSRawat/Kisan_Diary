import React from 'react'
import { Link } from 'react-router-dom'

export default function Masale() {
  return (
    <div>
        <ul className='flex flex-col gap-3'>
        <li><Link className='text-2xl text-blue-900 ' to="/pyaj"> 1.प्याज</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/dhaniya"> 2.धनिया</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/methi"> 3.मेथी</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/lehsun"> 4.लहसुन</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/haldi"> 5.हल्दी</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/adrak"> 6.अदरक</Link></li>
        </ul>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Masale() {
  return (
    <div>
        <ul className='flex flex-col gap-3'>
        <li><Link className='text-2xl text-blue-900 ' to="/pyaj"> 1.प्याज</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/gehun"> 2.</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/gehun"> 3.</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/gehun"> 4.</Link></li>
        </ul>
    </div>
  )
}

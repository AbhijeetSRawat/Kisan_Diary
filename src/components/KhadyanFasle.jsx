import React from 'react'
import { Link } from 'react-router-dom'

export default function KhadyanFasle() {
  return (
    <div>
        <ul className='flex flex-col gap-3'>
        <li><Link className='text-2xl text-blue-900 ' to="/gehun"> 1.गेहूँ</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/dhaan"> 2.धान</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/jo"> 3.जौ</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/makka"> 4.मक्का</Link></li>
        </ul>
    </div>
  )
}

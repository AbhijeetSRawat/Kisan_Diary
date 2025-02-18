import React from 'react'
import { Link } from 'react-router-dom'

export default function Tilhanifasle() {
  return (
    <div>
      <ul className='flex flex-col gap-3'>
        <li><Link className='text-2xl text-blue-900 ' to="/lahi"> 1.लाही (तोरिया)</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/rai"> 2.राई / सरसों</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/peelisarso"> 3.पीली सरसों</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/moongfali"> 4.मूँगफली</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/til"> 5.तिल</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/soorajmukhi"> 6.सूरजमुखी</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/soyabeen"> 7.सोयाबीन</Link></li>
        </ul>
    </div>
  )
}













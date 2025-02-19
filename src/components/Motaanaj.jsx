import React from 'react'
import { Link } from 'react-router-dom'

export default function Motaanaj() {
  return (
    <div>
        <ul className='flex flex-col gap-3'>
        <li><Link className='text-2xl text-blue-900 ' to="/madua"> 1. मंडुवा झंगोरा (मादिरा/सांवा)</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/kakun"> 2. काकुन</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/cheena"> 3. चीना</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/ramdana"> 4. रामदाना</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/ricebean"> 5. राइसबीन (नौरंगी)</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/gahat"> 6. गहत (कुल्थी)</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/parichay"> 7. मोटे अनाज-परिचय, आहार में महत्व एवं पोषकता</Link></li>

        </ul>
    </div>
  )
}

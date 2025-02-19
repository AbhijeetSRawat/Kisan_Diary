import React from 'react'
import { Link } from 'react-router-dom'

export default function DalhaniFasle() {
  return (
    <div>
        <ul className='flex flex-col gap-3'>
        <li><Link className='text-2xl text-blue-900 ' to="/chana"> 1.चना</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/matar"> 2.मटर</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/masoor"> 3.मसूर</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/urad"> 4.उर्द</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/moong"> 5.मूँग</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/rajma"> 6.राजमा</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/arhar"> 7.अरहर (तूर)</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/ricebean"> 8.राइसबीन (नौरंगी)</Link></li>
                <li><Link className='text-2xl text-blue-900 ' to="/gahat"> 9.गहत (कुल्थी)</Link></li>
        </ul>
    </div>
  )
}

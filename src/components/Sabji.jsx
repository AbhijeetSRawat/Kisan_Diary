import React from 'react'
import { Link } from 'react-router-dom'

export default function Sabji() {
  return (
    <div>
        <ul className='flex flex-col gap-3'>
        <li><Link className='text-2xl text-blue-900 ' to="/aaloo"> 1.आलू </Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/bagun"> 2.बैंगन</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/bhindi"> 3.भिंडी </Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/torai"> 4.तोरई</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/chappankaddu"> 5.चप्पन कद्दू</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/faraasbean"> 6.फराशबीन</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/gobhi"> 7.गोभी </Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/karela"> 8.करेला</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/kashifal"> 9.काशीफल</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/kheera"> 10.खीरा</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/lauki"> 11.लौकी</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/lobiya"> 12.लोबिया</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/mirch"> 13.मिर्च</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/parwal"> 14.परवल</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/polyhouse"> 15.पॉलीहाउस में सब्जियों का उत्पादन</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/sabjimatar"> 16.मटर</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/sabjisangrashit"> 17.मक्का</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/sem"> 18.सेम</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/shimalamirch"> 19.शिमला मिर्च</Link></li>
        <li><Link className='text-2xl text-blue-900 ' to="/tamatar"> 20.टमाटर</Link></li>
        

        </ul>
    </div>
  )
}

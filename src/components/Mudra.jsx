import React from 'react'
import { Link } from 'react-router-dom'

export default function Mudra() {
  return (
    <div>
        <div>
        <ul className='flex flex-col gap-3'>
            <li><Link className='text-2xl text-blue-900 ' to="/mudra1"> 1.मृदा एवं जल संरक्षण तकनीक</Link></li>
            <li><Link className='text-2xl text-blue-900 ' to="/mudra2"> 2.मृदा परीक्षण पर आधारित एकीकृत (समेकित) पोषक तत्व प्रबन्धन</Link></li>
            <li><Link className='text-2xl text-blue-900 ' to="/mudra3"> 3.एकीकृत नाशीजीव प्रबन्धन</Link></li>
            <li><Link className='text-2xl text-blue-900 ' to="/mudra4"> 4.पर्वतीय क्षेत्रों में वर्शा पर आधारित खेती हेतु भूमि एवं जल संरक्षण</Link></li>      
        </ul>
    </div>
    </div>
  )
}

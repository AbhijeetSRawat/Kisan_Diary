import React from 'react'
import { Link } from 'react-router-dom'

export default function PashuPalan() {
  return (
    <div>
            <ul className='flex flex-col gap-3'>
            <li><Link className='text-2xl text-blue-900 ' to="/pashuahar"> 1.पशु आहार तकनीकी</Link></li>
            <li><Link className='text-2xl text-blue-900 ' to="/pasubimari"> 2.पशूओं की प्रमुख संक्रामक बीमारियाँ</Link></li>
            <li><Link className='text-2xl text-blue-900 ' to="/kukkut"> 3.बैकयार्ड कुक्कुट पालन</Link></li>
            <li><Link className='text-2xl text-blue-900 ' to="/matsya"> 4.समन्वित मत्स्य पालन</Link></li>
            <li><Link className='text-2xl text-blue-900 ' to="/pashuprabandhan"> 5.पशुओं में स्वास्थ्य प्रबन्धन से सम्बन्धित किये जाने वाले माहवार कार्य</Link></li>
            <li><Link className='text-2xl text-blue-900 ' to="/pramukhbindu"> 6.पशु पालन के प्रमुख बिन्दु</Link></li>
            <li><Link className='text-2xl text-blue-900 ' to="/matsyapalan"> 7.	मत्स्य पालन</Link></li>
            </ul>
        </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import Chapter1 from '../pages/chapter1'

export default function SideBar() {
  return (
    <div>
        <aside className='bg-slate-300' style={{ width: '200px', padding: '16px' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li className='flex flex-col gap-5 mt-3 '>
            <Link className='bg-slate-300 text-black rounded-md h-[40px]  border-b-2 flex justify-center items-center hover:bg-blue-100 hover:scale-105  hover:text-blue-900' to="/chapter1" >उत्तराखंड एक दृष्टि मे</Link>
            <Link className='bg-slate-300 text-black rounded-md h-[40px]  border-b-2  flex justify-center items-center hover:bg-blue-100 hover:scale-105  hover:text-blue-900' to="/meriyojna" >मेरी योजना
            </Link>

            <Link className='bg-slate-300 text-black rounded-md h-[70px] border-b-2 flex justify-center items-center pl-3 hover:bg-blue-100 hover:scale-105  hover:text-blue-900' to="/">पन्तनगर विश्वविद्यालय - एक झलक</Link>
              <Link className='bg-slate-300 text-black rounded-md h-[40px] border-b-2 flex justify-center items-center hover:bg-blue-100 hover:scale-105  hover:text-blue-900' to="/khadyanfasle">खाद्यान्न फसलें</Link>
              <Link className='bg-slate-300 text-black rounded-md h-[40px] border-b-2 flex justify-center items-center hover:bg-blue-100 hover:scale-105  hover:text-blue-900' to="/dalhanifasle">दलहनी फसलें</Link>
              <Link className='bg-slate-300 text-black rounded-md h-[40px] border-b-2 flex justify-center items-center hover:bg-blue-100 hover:scale-105  hover:text-blue-900' to="/tilhanifasle">तिलहनी फसलें</Link>
              
              <Link className='bg-slate-300 text-black rounded-md h-[40px] border-b-2 flex justify-center items-center hover:bg-blue-100 hover:scale-105  hover:text-blue-900' to="/masale">मसालों की खेती</Link>
              <Link className='bg-slate-300 text-black rounded-md h-[70px] border-b-2 flex justify-center items-center pl-3 hover:bg-blue-100 hover:scale-105  hover:text-blue-900' to="/pashu">पशु सम्बन्धी महत्वपूर्ण जानकारीयां</Link>
              <Link className='bg-slate-300 text-black rounded-md h-[40px] border-b-2 flex justify-center items-center hover:bg-blue-100 hover:scale-105  hover:text-blue-900' to="/motaanaj">मोटे अनाज</Link>
              <Link className='bg-slate-300 text-black rounded-md h-[70px] border-b-2 flex justify-center items-center pl-3 hover:bg-blue-100 hover:scale-105  hover:text-blue-900' to="/falfool">फल, फूल एवम सुगंधि फसलों खेती उत्पादन हेतु
              </Link>
              <Link className='bg-slate-300 text-black rounded-md h-[40px] border-b-2 flex justify-center items-center hover:bg-blue-100 hover:scale-105  hover:text-blue-900' to="/ganna">गन्ना</Link>
              <Link className='bg-slate-300 text-black rounded-md h-[40px] border-b-2 flex justify-center items-center hover:bg-blue-100 hover:scale-105  hover:text-blue-900' to="/jaivik">जैविक खेती</Link>
              <Link className='bg-slate-300 text-black rounded-md h-[40px] border-b-2 flex justify-center items-center hover:bg-blue-100 hover:scale-105  hover:text-blue-900' to="/sabji">सब्जी</Link>
              <Link className='bg-slate-300 text-black rounded-md h-[40px] border-b-2 flex justify-center items-center hover:bg-blue-100 hover:scale-105  hover:text-blue-900' to="/mudra">मृदा</Link>
              <Link className='bg-slate-300 text-black rounded-md h-[40px] border-b-2 flex justify-center items-center hover:bg-blue-100 hover:scale-105  hover:text-blue-900' to="/mushroom">मशरूम</Link>
              <Link className='bg-slate-300 text-black rounded-md h-[70px] border-b-2 flex justify-center items-center pl-3 hover:bg-blue-100 hover:scale-105  hover:text-blue-900' to="/photosfile">प्रौद्योगिकी महाविद्यालय द्वारा विकसित किए गए कृषि यंत्र एवं तकनीकें
              </Link>






            </li>
          </ul>
        </aside>
    </div>
  )
}

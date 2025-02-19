import React from 'react'
import { Link } from 'react-router-dom'
import Chapter1 from '../pages/chapter1'
export default function SideBar() {
  return (
    <div>
        <aside className='bg-slate-300' style={{ width: '200px', padding: '16px' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li className='flex flex-col gap-5 mt-3 '>
            <Link className='bg-black text-white rounded-md h-[40px] flex justify-center items-center hover:bg-white hover:text-black' to="/chapter1" >उत्तराखंड एक दृष्टि मे</Link>
            <Link className='bg-black text-white rounded-md h-[70px] flex justify-center items-center pl-3 hover:bg-white hover:text-black' to="/">पन्तनगर विश्वविद्यालय - एक झलक</Link>
              <Link className='bg-black text-white rounded-md h-[40px] flex justify-center items-center hover:bg-white hover:text-black' to="/khadyanfasle">खाद्यान्न फसलें</Link>
              <Link className='bg-black text-white rounded-md h-[40px] flex justify-center items-center hover:bg-white hover:text-black' to="/dalhanifasle">दलहनी फसलें</Link>
              <Link className='bg-black text-white rounded-md h-[40px] flex justify-center items-center hover:bg-white hover:text-black' to="/tilhanifasle">तिलहनी फसलें</Link>
              
              <Link className='bg-black text-white rounded-md h-[40px] flex justify-center items-center hover:bg-white hover:text-black' to="/masale">मसालों की खेती</Link>
              <Link className='bg-black text-white rounded-md h-[70px] flex justify-center items-center pl-3 hover:bg-white hover:text-black' to="/pashu">पशु सम्बन्धी महत्वपूर्ण जानकारीयां</Link>
              <Link className='bg-black text-white rounded-md h-[40px] flex justify-center items-center hover:bg-white hover:text-black' to="/motaanaj">मोटे अनाज</Link>
              <Link className='bg-black text-white rounded-md h-[70px] flex justify-center items-center pl-3 hover:bg-white hover:text-black' to="/falfool">फल, फूल एवम सुगंधि फसलों खेती उत्पादन हेतु
              </Link>
              <Link className='bg-black text-white rounded-md h-[40px] flex justify-center items-center hover:bg-white hover:text-black' to="/ganna">गन्ना</Link>
              <Link className='bg-black text-white rounded-md h-[40px] flex justify-center items-center hover:bg-white hover:text-black' to="/jaivik">जैविक खेती</Link>
              <Link className='bg-black text-white rounded-md h-[40px] flex justify-center items-center hover:bg-white hover:text-black' to="/sabji">सब्जी</Link>
              <Link className='bg-black text-white rounded-md h-[40px] flex justify-center items-center hover:bg-white hover:text-black' to="/mudra">मृदा</Link>





            </li>
          </ul>
        </aside>
    </div>
  )
}

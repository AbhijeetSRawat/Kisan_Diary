import React from 'react'
import { Link } from 'react-router-dom'
import Chapter1 from '../pages/chapter1'
export default function SideBar() {
  return (
    <div>
        <aside style={{ width: '200px', background: '#f0f2f5', padding: '16px' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li className='flex flex-col gap-5'>
              <Link className='bg-black text-white rounded-md h-[40px] flex justify-center items-center hover:bg-white hover:text-black' to="/chapter1" >उत्तराखंड एक दृष्टि </Link>
              <Link className='bg-black text-white rounded-md h-[40px] flex justify-center items-center hover:bg-white hover:text-black' to="/khadyanfasle">खाद्यान्न फसलें</Link>
              <Link className='bg-black text-white rounded-md h-[40px] flex justify-center items-center hover:bg-white hover:text-black' to="/dalhanifasle">दलहनी फसलें</Link>
              <Link className='bg-black text-white rounded-md h-[40px] flex justify-center items-center hover:bg-white hover:text-black' to="/masale">मसालों की खेती</Link>
            </li>
          </ul>
        </aside>
    </div>
  )
}

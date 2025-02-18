import React from 'react'
import { Link } from 'react-router-dom'
import Chapter1 from '../pages/chapter1'
export default function SideBar() {
  return (
    <div>
        <aside style={{ width: '200px', background: '#f0f2f5', padding: '16px' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <Link to="/chapter1" >Chapter1 </Link>
            </li>
          </ul>
        </aside>
    </div>
  )
}

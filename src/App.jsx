
import { Route, Routes } from 'react-router-dom'
import Gehun from './pages/gehun'
import { Cheena } from './pages/motaanaz/Cheena'
import { Gahat } from './pages/motaanaz/Gahat'
import { Jhangora } from './pages/motaanaz/Jhangora'
import { Kakun } from './pages/motaanaz/Kakun'
import {Kutki} from './pages/motaanaz/Kutki'
import { Ramdana } from './pages/motaanaz/Ramdana'


// } from './pages/motaanaz/Kuttu'
export default function App() {
  return (
    <div>
      <div>
        <nav >

        </nav>
        <Routes>
            <Route path='/' element={<Gehun/>}/>
            <Route path='*' element="page not found"/>
           
        </Routes>
      </div>
    </div>
  )
}

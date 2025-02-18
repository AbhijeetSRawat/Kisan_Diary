
import { Route, Routes } from 'react-router-dom'
import Gehun from './pages/gehun'


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

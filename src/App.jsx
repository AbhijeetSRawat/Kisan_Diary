
import React from 'react';
import logo from './assets/imgages/logo1.jpg'
import joinedImages from './assets/imgages/joinedimages.jpg'
import { Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';
import Chapter1 from './pages/chapter1';
import Homepage from './pages/Homepage';
import KhadyanFasle from './components/KhadyanFasle';
import Gehun from './pages/gehun';
import Chana from './pages/Dal/chana';
import DalhaniFasle from './components/DalhaniFasle';
import Matar from './pages/Dal/matar';
import Masoor from './pages/Dal/masoor';
import Urd from './pages/Dal/urd';
import Moong from './pages/Dal/moong';
import Rajma from './pages/Dal/rajma';
import Arhar from './pages/Dal/arhar';
const App = () => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', }}>
      {/* Header */}
      <header  style={{ background: '#001529', color: 'white', height: '150px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems:'center' }}>
        
        <div className=' flex  items-center'>
        <div className="logo " ><img src={logo} alt="logo" className='h-[15vh] rounded-full' /></div>
          <div className='flex flex-col items-center w-[90vw]'>
          <h1 className='text-4xl font-semibold mb-2'>उत्तराखंड किसान ज्ञान पोर्टल</h1>
          <h3 className='text-xl'>गोविन्द बल्लभ पन्त कृषि एवं प्रौद्योगिक विश्वविद्यालय</h3>
          <h3 className='text-xl'>पंतनगर-263145 , उत्तराखंड</h3>
          </div>
        </div>
      </header>
      <img src={joinedImages} alt="images" />

      <div style={{ display: 'flex', flex: 1 }}>
        {/* Sidebar */}
        <SideBar className='h-[70vh]'/>

        {/* Main Content */}
        <main style={{ flex: 1, padding: '24px' }}>
          <div style={{ marginBottom: '16px' }}>
            <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='/chapter1' element={<Chapter1/>}/>
                <Route path='/KhadyanFasle' element={<KhadyanFasle/>}/>
                <Route path='/DalhaniFasle' element={<DalhaniFasle/>}/>
                <Route path='/gehun' element={<Gehun/>}/>
                <Route path='/chana' element={<Chana/>}/>
                <Route path='/matar' element={<Matar/>}/>
                <Route path='/masoor' element={<Masoor/>}/>
                <Route path='/urad' element={<Urd/>}/>
                <Route path='/moong' element={<Moong/>}/>
                <Route path='/rajma' element={<Rajma/>}/>
                <Route path='/arhar' element={<Arhar/>}/>
                <Route path='*' element={<div> Not Found</div>} />
            </Routes>
          </div>
          <div style={{ background: '#fff', padding: '24px', minHeight: '600px', borderRadius: '8px' }}>
            
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;

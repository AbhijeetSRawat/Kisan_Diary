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
import Masale from './components/Masale';
import Pyaj from './pages/masaley/Pyaj';
import Chawal from './pages/Chawal';
import Abt from './pages/abt';
import Macca from './pages/macca';
import Jo from './pages/jo';
import PashuPalan from './components/PashuPalan';
import Pasuahar from './pages/pasupalan/Pasuahar';
import Pasubimari from './pages/pasupalan/Pasubimari';
import Kukutpalan from './pages/pasupalan/Kukutpalan';
import Matsya from './pages/pasupalan/Matsya';
import Pasuhealth from './pages/pasupalan/Pasuhealth';
import Pasupalanbindu from './pages/pasupalan/Pasupalanbindu';
import Matsyapalan from './pages/pasupalan/Matsyapalan';
import Dhaniya from './pages/masaley/Dhaniya';
import Methi from './pages/masaley/Methi';
import Lahsun from './pages/masaley/Lahsun';
import Haldi from './pages/masaley/Haldi';
import Adrak from './pages/masaley/Adrak';
import Motaanaj from './components/Motaanaj';
import { Cheena } from './pages/motaanaz/Cheena';
import { Kakun } from './pages/motaanaz/Kakun';
import { Madua } from './pages/motaanaz/Madua';
import { Ramdana } from './pages/motaanaz/Ramdana';
import { Kuttu } from './pages/motaanaz/Kuttu';
import { Raisbeen } from './pages/motaanaz/Raisbeen';
import { Gahat } from './pages/motaanaz/Gahat';
import { Motaanazparichay } from './pages/motaanaz/Motaanazparichay';
import Falfool from './components/Falfool';
import Fal from './pages/falfool/Fal';
import Aam from './pages/falfool/Aam';
import Fool from './pages/falfool/Fool';
import Sugandhi from './pages/falfool/Sugandhi';
import Aamkeybaag from './pages/falfool/Aamkeybaag';
import Leechi from './pages/falfool/Leechi';
import Amrud from './pages/falfool/Amrud';
import Exportfool from './pages/falfool/Exportfool';
import Ganna from './pages/Ganna';
const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header
        style={{
          background: "#001529",
          color: "white",
          height: "150px",
          padding: "16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className=" flex  items-center">
          <div className="logo ">
            <img src={logo} alt="logo" className="h-[15vh] rounded-full" />
          </div>
          <div className="flex flex-col items-center w-[90vw]">
            <h1 className="text-4xl font-semibold mb-2">
              उत्तराखंड किसान ज्ञान पोर्टल
            </h1>
            <h3 className="text-xl">
              गोविन्द बल्लभ पन्त कृषि एवं प्रौद्योगिक विश्वविद्यालय
            </h3>
            <h3 className="text-xl">पंतनगर-263145 , उत्तराखंड</h3>
          </div>
        </div>
      </header>
      <img src={joinedImages} alt="images" />

      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar */}
        <SideBar className="h-[70vh]" />

        {/* Main Content */}
        <main className='bg-slate-300' style={{ flex: 1, padding: "24px" }}>
          <div className=' bg-white  border-4 p-5  rounded-lg' style={{ marginBottom: "16px" }}>
            <Routes>
                <Route path='/' element={<Abt/>}/>
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
                <Route path='/masale' element={<Masale/>}/>
                <Route path='/pyaj' element={<Pyaj/>}/>
                <Route path='/dhaan' element={<Chawal/>}/>
                <Route path='/pashuprabandhan' element={<Pasuhealth/>}/>
                <Route path='/pramukhbindu' element={<Pasupalanbindu/>}/>
                <Route path='/matsyapalan' element={<Matsyapalan/>}/>
                <Route path='/makka' element={<Macca/>}/>
                <Route path='/jo' element={<Jo/>}/>
                <Route path='/pashu' element={<PashuPalan/>}/>
                <Route path='/pashuahar' element={<Pasuahar/>}/>
                <Route path='/pasubimari' element={<Pasubimari/>}/>
                <Route path='/kukkut' element={<Kukutpalan/>}/>
                <Route path='/matsya' element={<Matsya/>}/>
                <Route path='/dhaniya' element={<Dhaniya/>}/>
                <Route path='/methi' element={<Methi/>}/>
                <Route path='/lehsun' element={<Lahsun/>}/>
                <Route path='/haldi' element={<Haldi/>}/>
                <Route path='/adrak' element={<Adrak/>}/>
                <Route path='/motaanaj' element={<Motaanaj/>}/>
                <Route path='/cheena' element={<Cheena/>}/>
                <Route path='/kakun' element={<Kakun/>}/>
                <Route path='/madua' element={<Madua/>}/>
                <Route path='/ramdana' element={<Ramdana/>}/>
                <Route path='/kuttu' element={<Kuttu/>}/>
                <Route path='/ricebean' element={<Raisbeen/>}/>
                <Route path='/gahat' element={<Gahat/>}/>
                <Route path='/parichay' element={<Motaanazparichay/>}/>
                <Route path='/falfool' element={<Falfool/>}/>
                <Route path='/falutpadan' element={<Fal/>}/>
                <Route path='/aamkevibhinn' element={<Aam/>}/>
                <Route path='/sugandhifasle' element={<Sugandhi/>}/>
                <Route path='/aamkebag' element={<Aamkeybaag/>}/>
                <Route path='/litchikebaag' element={<Leechi/>}/>
                <Route path='/amroodkiunnat' element={<Amrud/>}/>
                <Route path='/pushputpadan' element={<Fool/>}/>
                <Route path='/ganna' element={<Ganna/>}/>






                <Route path='*' element= {<div> Not Found</div>} />
            </Routes>
          </div>
         
        </main>
      </div>
    </div>
  );
};

export default App;

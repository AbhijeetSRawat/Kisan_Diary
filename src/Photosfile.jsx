import React from 'react'
import machine1 from '../src/assets/imgages/pantnagar_machine_photos/research1.jpg'
import machine2 from '../src/assets/imgages/pantnagar_machine_photos/research2.jpg'

import machine4 from '../src/assets/imgages/pantnagar_machine_photos/research4.jpg'

import machine6 from '../src/assets/imgages/pantnagar_machine_photos/research6.jpg'


import machine10 from '../src/assets/imgages/pantnagar_machine_photos/research10.jpg'
import machine11 from '../src/assets/imgages/pantnagar_machine_photos/research11.jpg'
import machine13 from '../src/assets/imgages/pantnagar_machine_photos/research13.jpg'

import machine16 from '../src/assets/imgages/pantnagar_machine_photos/research16.jpg'
import machine17 from '../src/assets/imgages/pantnagar_machine_photos/research17.jpg'


export default function Photosfile() {
  return (
    <div>
        <div className='flex flex-col  items-center'>

            <p className='text-3xl font-bold mb-16'>प्रौद्योगिकी महाविद्यालय द्वारा विकसित किए गए कृषि यंत्र एवं तकनीकें

            </p>

            <img src={machine1} alt="machine" className='w-[70vh] rounded-lg' /><br />
            <p className='text-2xl font-semibold mb-10'>ग्लेडियोलस प्लांटर            </p>


            <img src={machine2} alt="machine" className='w-[70vh] rounded-lg' /><br />
            <p className='text-2xl font-semibold mb-10'>पन्त जीरो टिल फ़र्टी सीड ड्रिल
            </p>

            
            <img src={machine4} alt="machine" className='w-[70vh] rounded-lg' /><br />
            <p className='text-2xl font-semibold mb-10'>सोलर पावर ऑपरेटेड पोर्टेबल कोल्ड स्टोरेज मशीन            </p>



            <img src={machine6} alt="machine" className='w-[70vh] rounded-lg' /><br />
            <p className='text-2xl font-semibold mb-10'>रोटावेटर           </p>

           
            <img src={machine10} alt="machine" className='w-[70vh] rounded-lg' /><br />
            <p className='text-2xl font-semibold mb-10'>पैडी रेसिड्यू मैनेजमेंट मशीन            </p>

            <img src={machine11} alt="machine" className='w-[70vh] rounded-lg' /><br />
            <p className='text-2xl font-semibold mb-10'>अनियन दिग्गर</p>
           
            <img src={machine13} alt="machine" className='w-[70vh] rounded-lg' /><br />
            <p className='text-2xl font-semibold mb-10'>रोटरी सोविंग मशीन </p>

            
            <img src={machine16} alt="machine" className='w-[70vh] rounded-lg' /><br />
            <p className='text-2xl font-semibold mb-10'>प्लांट मल्टीक्रॉप थ्रेशर फॉर हिल            </p>


            <img src={machine17} alt="machine" className='w-[70vh] rounded-lg' /><br />
            <p className='text-2xl font-semibold mb-10'>मिनी थ्रेसर</p>


        </div>
    </div>
  )
}

import React from 'react'
import meriyojna from './assets/files/Meri_Yojna.pdf'

export default function MeriYojna() {
  return (
    <div>
     <iframe
            src={meriyojna}
            className='h-[90vh] w-[80vw] bg-black'
            
    ></iframe> 
    </div>
  )
}

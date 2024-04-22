import React from 'react'
import Image from 'next/image'
import {img1} from '../app/31qfm392.bmp'

export default function intro() {
  return (
    <section>
      <div className='flex items-center justify-center '>
        <div>
        <Image src={img1} alt='myimg'/>
        </div>
      </div>
    </section>
  )
}

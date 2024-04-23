import React from 'react'
import Image from 'next/image'

export default function intro() {
  return (
    <section>
      <div className='flex items-center justify-center '>
        <div>
        <Image src='/31qfm392.bmp' width="192" height="192" quality="80" priority={true} alt='myimg'/>
        </div>
      </div>
    </section>
  )
}

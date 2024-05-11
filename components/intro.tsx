import React from 'react'
import Image from 'next/image'

export default function intro() {
  return (
    <section>
      <div className='flex items-center justify-center '>
        <div className='relative'>
          <div>
            <Image
              src='/31qfm392.bmp'
              alt="flower"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-16 w-16 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </div>

          <span className='absolute bottom-0
            right-0 text-4xl'>
            👋
          </span>
          {/* <Image src='/31qfm392.bmp' width="192" height="192" quality="80" priority={true} alt='myimg' /> */}
        </div>
      </div>
    </section>
  )
}
// https://unsplash.com/fr/photos/photographie-en-gros-plan-de-fleur-a-petales-rouges-et-blancs-w1JE5duY62M


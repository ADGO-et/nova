import Image from 'next/image'
import React from 'react'

const midSectionImage = () => {
  return (
    <div className='relative flex flex-row gap-4 p-8 w-[300px] md:w-[400px] lg:w-[500px] h-[350px] md:h-[450px] lg:h-[550px]'>
        <Image src='/image.png' alt='' width={40} height={40} className='absolute top-0 left-0'/>
        <div className='w-auto flex items-start' >
            <Image src='/left.png' alt='' width={300} height={400} />
        </div>
        <div className='w-auto flex items-end'>
            <Image src='/right.png' alt='' width={500} height={404} />
        </div>
    </div>
  )
}

export default midSectionImage
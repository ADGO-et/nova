import React from 'react'
import ProvideCard from './ProvideCard'
import { devices } from '@/constants'

const ProvideSection = () => {
  return (
    <div className='flex flex-col mx-auto w-[80%] gap-8 py-16'>
        <div className='flex flex-col gap-6 text-background'>
            <h1 className='text-center font-semibold text-2xl md:text-5xl '>We Provide you streaming experience across various devices.</h1>
            <p className='text-center text-sm'>With Nova Stream, you can enjoy your favourite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.</p>
        </div>
        <div className='flex flex-col md:flex-row gap-8 md:gap-0 justify-between'>
          {devices.map((device, index) => (
            <ProvideCard key={index} title={device.title} image={device.image} />
          ))}
        </div>
    </div>
  )
}

export default ProvideSection
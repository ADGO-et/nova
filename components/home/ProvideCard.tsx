import React from 'react'
import Image  from 'next/image';

interface ProvideCardProps {
  title: string;
  image: string;
}

const ProvideCard = ({ title, image }:ProvideCardProps) => {
  return (
    <div className='flex flex-col gap-3 items-center'>
        <Image src={image} alt='Provide card picture' width={180} height={180} className='rounded-full' />
        <h2 className='font-semibold text-background'>{title}</h2>
    </div>
  )
}

export default ProvideCard
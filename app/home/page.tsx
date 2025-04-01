import React from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import ClientsSection from '@/components/home/ClientsSection'
import FaqSection from '@/components/home/FaqSection'
import Services from '@/components/services/services'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <div className="relative flex flex-col justify-center p-12 items-center w-full h-[250px] md:h-[570px] bg-cover bg-center gap-4 md:gap-12" style={{ backgroundImage: 'url(/home/hero2.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className='mx-auto text-center text-2xl md:text-5xl font-bold text-white relative z-9'>Empower Your Platform – Seamless Streaming and Monetization with Nova</h1>
        <Link href='/services' className="bg-blue-800 text-white font-semibold py-3 px-4 rounded-xl flex items-center space-x-2 hover:bg-blue-600 hover:scale-105 duration-300 relative z-9">
          <span className='text-sm hover:animate-horizontal'>Get Started Today</span>
          <FaArrowAltCircleRight size={25} className='hover:animate-horizontal' />
        </Link>
      </div>
      <Services/>
      {/* <ProvideSection /> */}
      <ClientsSection />
      <FaqSection />
    </div>
  )
}

export default page
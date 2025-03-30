import React from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import ProvideSection from '@/components/home/ProvideSection'
import { Button } from '@/components/ui/button'
import ClientsSection from '@/components/home/ClientsSection'
import FaqSection from '@/components/home/FaqSection'
import Services from '@/components/services/services'

const page = () => {
  return (
    <div>
      <div className="relative flex flex-col justify-center p-12 items-center w-full h-[250px] md:h-[570px] bg-cover bg-center gap-4 md:gap-12" style={{ backgroundImage: 'url(/home/hero2.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className='mx-auto text-center text-2xl md:text-5xl font-bold text-white relative z-10'>Empower Your Platform – Seamless Streaming and Monetization with Nova</h1>
        <Button className="bg-blue-800 text-white font-semibold py-3 px-4 rounded-xl flex items-center space-x-2 hover:bg-blue-600 relative z-10">
          <span className='text-sm'>Get Started Today</span>
          <FaArrowAltCircleRight size={45} />
        </Button>
      </div>
      <Services/>
      {/* <ProvideSection /> */}
      <ClientsSection />
      <FaqSection />
    </div>
  )
}

export default page
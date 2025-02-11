import React from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import ProvideSection from '@/components/home/ProvideSection'
import { Button } from '@/components/ui/button'
import ClientsSection from '@/components/home/ClientsSection'
import FaqSection from '@/components/home/FaqSection'

const page = () => {
  return (
    <div>
      <div className="flex flex-col justify-center p-12 items-center w-full h-[250px] md:h-[570px] bg-cover opacity-80 bg-center gap-4 md:gap-12" style={{ backgroundImage: 'url(/home/bgBanner.png)' }}>
        <h1 className='mx-auto text-center text-2xl md:text-5xl font-bold text-white'>Empower Your Platform – Seamless Streaming and Monetization with Nova</h1>
        <Button className="bg-blue-800 text-white font-semibold py-3 px-4 rounded-xl flex items-center space-x-2 hover:bg-blue-600 ">
          <span className='text-sm'>Get Started Today</span>
          <FaArrowAltCircleRight size={45} />
        </Button>
      </div>
      <ProvideSection />
      <ClientsSection />
      <FaqSection />
    </div>
  )
}

export default page
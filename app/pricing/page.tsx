import React from 'react'
import PricingSection from '@/components/pricing/PricingSection'
import CustomAppsWebsites from '@/components/pricing/CustomApp'
import RequestQuote from '@/components/pricing/RequestSection'

const page = () => {
  return (
    <div>
      <div className="flex flex-col justify-center p-12 items-center w-full h-[250px] md:h-[385px] bg-cover bg-center gap-4 md:gap-12" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/pricing.svg)' }}>
        <h1 className='mx-auto text-center text-4xl md:text-6xl font-bold text-white'>Affordable Plans for Every Station.</h1>
      </div>
      <PricingSection />
      <CustomAppsWebsites />
      <RequestQuote />
    </div>
  )
}

export default page
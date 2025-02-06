import React from 'react'
import Services from '../../components/services/services'
import Features from '../../components/services/features'
import ServicesHeader from '../../components/services/services_header'

const page = () => {
  return (
    <div className="bg-white text-gray-900">
      <ServicesHeader />
      <Services />
      <Features />
    </div>
  );
};

export default page;

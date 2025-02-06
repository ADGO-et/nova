import React from 'react'
import Services from './components/services'
import ServicesHeader from './components/services_header'

const page = () => {
  return (
    <div className="bg-white text-gray-900">
      <ServicesHeader />
      <Services />
    </div>
  );
};

export default page;

import React from 'react';
import Header from './components/header';
import Stats from './components/stats';
import CoreValues from './components/coreVals';
import StreamingFeature from './components/midsection';
import Testimonials from './components/testimonials';

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <StreamingFeature />
      <Stats />
      <CoreValues />
      <Testimonials backgroundImage={'/testimonials_final_bg.png'}/>
    </div>
  );
};

export default AboutPage;
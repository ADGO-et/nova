import React from 'react';
import Header from '../../components/about/header';
import Stats from '../../components/about/stats';
import CoreValues from '../../components/about/coreVals';
import StreamingFeature from '../../components/about/midsection';
import Testimonials from '../../components/about/testimonials';

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
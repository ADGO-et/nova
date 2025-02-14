import React from 'react';
import Header from '../../components/about/header';
import Stats from '../../components/about/stats';
import CoreValues from '../../components/about/coreVals';
import StreamingFeature from '../../components/about/midsection';
import Testimonials from '../../components/about/testimonials';
import ClientSection from '../../components/home/ClientsSection';

const AboutPage = () => {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <StreamingFeature />
      <Stats />
      <CoreValues />
      <Testimonials backgroundImage={'/testimonials_final_bg.png'}/>
      <ClientSection />
    </div>
  );
};

export default AboutPage;
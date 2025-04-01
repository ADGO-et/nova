import React from 'react'
import Services from '../../components/services/services'
import Features from '../../components/services/features'
import ServicesHeader from '../../components/services/services_header'
import { PlayoutServiceSection } from '@/components/services/PlayoutServiceSection';

const page = () => {
  return (
    <div className="bg-background text-foreground">
      <ServicesHeader />
      <Services />
      <Features />
      <PlayoutServiceSection/>
    </div>
  );
};

export default page;

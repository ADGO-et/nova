import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Button } from '../ui/button';

interface PageBannerProps {
  title: string;
  image: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ title, image }) => {
  return (
    <div className="flex items-center w-full h-[250px] md:h-[400px] bg-cover opacity-80 bg-center rounded-2xl">
      <h1 className='mx-auto text-2xl md:text-6xl font-bold text-white'>{title}</h1>
    </div>
  );
};

export default PageBanner;
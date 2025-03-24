import React from 'react'
import { FaLocationDot, FaPhone, FaEnvelope, FaChevronRight } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='flex flex-col gap-4 md:gap-8 bg-background'>
      <div className='grid grid-cols-1 md:grid-cols-3 bg-foreground p-4'>
        <div className='p-2 md:border-r border-background flex gap-3 items-center md:justify-end pr-12'>
          <div className='p-2 rounded-full border border-background'>
            <FaLocationDot className='w-[14px] h-[14px] text-background'/>
          </div>
          <div>
            <p className='text-sm'>Address</p>
            <h2 className='text-md font-semibold text-background'>Bole Street</h2>
          </div>
        </div>
        <div className='p-2 md:border-r border-background flex gap-3 items-center md:justify-center'>
          <div className='p-2 rounded-full border border-background'>
            <FaPhone className='w-[14px] h-[14px] text-background'/>
          </div>
          <div>
            <p className='text-sm'>Phone</p>
            <h2 className='text-md font-semibold text-background'>0912841695/ 0912646315/ 0912343660</h2>
          </div>
        </div>
        <div className='p-2 flex gap-3 items-center md:justify-start pl-12'>
          <div className='p-2 rounded-full border border-background'>
            <FaEnvelope className='w-[14px] h-[14px] text-background'/>
          </div>
          <div>
            <p className='text-sm'>Email</p>
            <h2 className='text-md font-semibold text-background'>info@nova.et</h2>
            <h2 className='text-md font-semibold text-background'>kaleab@nova.et</h2>
            <h2 className='text-md font-semibold text-background'>kaleb@nova.et</h2>
          </div>
        </div>
      </div>
      <div className='bg-foreground text-background p-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 p-4 md:w-[75%] mx-auto items-center'>
          <div className='flex flex-col p-4 gap-4'>
            <h2 className='font-bold text-lg'>Nova</h2>
            <p className='text-sm'>
              NOVA TV is a scalable streaming platform with expertise in live and Video on Demand (VOD) streaming.  It is a trusted streaming partner for leading news media organizations and is officially partnered and licensed by the Ethiopian Broadcast Authority.
            </p>
          </div>
          <div className='p-4 flex flex-row gap-8 items-start'>
            <ul className='flex flex-col gap-6'>
              <li><Link className='flex flex-row items-center gap-2' href="/home"><FaChevronRight /><h3>Home</h3></Link></li>
              <li><Link className='flex flex-row items-center gap-2' href="/about"><FaChevronRight /><h3>About Us</h3></Link></li>
              <li><Link className='flex flex-row items-center gap-2' href="/blog"><FaChevronRight /><h3>Blog</h3></Link></li>
              <li><Link className='flex flex-row items-center gap-2' href="/pricing"><FaChevronRight /><h3>Pricing</h3></Link></li>
            </ul> 
            <ul className='flex flex-col gap-6'> 
              <li><Link className='flex flex-row items-center gap-2' href="/contact"><FaChevronRight /><h3>Contact Us</h3></Link></li>
              <li><Link className='flex flex-row items-center gap-2' href="#"><FaChevronRight /><h3>Account</h3></Link></li>
              <li><Link className='flex flex-row items-center gap-2' href="#"><FaChevronRight /><h3>Media Center</h3></Link></li>
              <li><Link className='flex flex-row items-center gap-2' href="#"><FaChevronRight /><h3>Ways to watch</h3></Link></li>
            </ul>  
            <ul className='flex flex-col gap-6'>  
              <li><Link className='flex flex-row items-center gap-2' href="#"><FaChevronRight /><h3>Terms of Services</h3></Link></li>
              <li><Link className='flex flex-row items-center gap-2' href="#"><FaChevronRight /><h3>Privacy Policy</h3></Link></li>
              <li><Link className='flex flex-row items-center gap-2' href="#"><FaChevronRight /><h3>Terms of Uses</h3></Link></li>
            </ul>
          </div>
        </div>
        <div className='border border-background w-full bg-foreground' />
        <Image src='/footerLogo.png' alt='logo' width={100} height={71.74} className='ml-12 md:ml-44 '/>
      </div>
    </div>
  )
}

export default Footer
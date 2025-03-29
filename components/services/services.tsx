// import { Link } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Services = () => {
  return (
    <div id="ourservices" className='bg-background text-foreground'>
      <div className="container mx-auto w-[80%] py-12">
        <h2 className="text-3xl font-bold text-center mt-10">Check Out Our Services </h2>
        <h2 className="text-3xl font-bold text-center mb-10">That We Provide</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 rounded-xl ">
            <Image src="/innovation.svg" alt="Innovation Icon 1" width={110} height={110} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">1.	Streaming Technology</h3>
            <p className="text-center mb-4">enables scalable, reliable, and accessible video and audio delivery across multiple devices.</p>
            <Link href='/pricing#customweb'  className="bg-blue-800 text-white font-semibold py-3 px-4 rounded-2xl flex items-center space-x-2 hover:bg-blue-600 mt-3 hover:scale-105 duration-300 ">
              <span className='text-sm'>Explore Our Solutions</span>
              <FaArrowAltCircleRight size={25} />
          </Link>
          </div>
          <div className="flex flex-col items-center p-6 rounded-xl ">
            <Image src="/reliable.svg" alt="Innovation Icon 1" width={110} height={110} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">2.	Custom App Development</h3>
            <p className="text-center mb-4">involves designing and building tailored software applications to address specific business or individual needs.</p>
            <Link href='/pricing#customweb' className="bg-blue-800 text-white font-semibold py-3 px-4 rounded-2xl flex items-center space-x-2 hover:bg-blue-600 mt-3 hover:scale-105 duration-300 ">
              <span className='text-sm'>Explore Our Solutions</span>
              <FaArrowAltCircleRight size={25} />
          </Link>
          </div>
          <div className="flex flex-col items-center p-6 rounded-xl ">
            <Image src="/customization.svg" alt="Innovation Icon 1" width={110} height={110} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">3.	Analytics & Insights</h3>
            <p className="text-center mb-4">involve the analysis of data to extract meaningful information and actionable understandings for improved decision-making</p>
            <Link href='/pricing#customweb' className="bg-blue-800 text-white font-semibold py-3 px-4 rounded-2xl flex items-center space-x-2 hover:bg-blue-600 mt-3 hover:scale-105 duration-300 ">
              <span className='text-sm'>Explore Our Solutions</span>
              <FaArrowAltCircleRight size={25} />
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
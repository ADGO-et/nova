import { Button } from "@/components/ui/button";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Services = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mt-10">Check Out Our Services </h2>
      <h2 className="text-3xl font-bold text-center mb-10">That We Provide</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center p-6 rounded-xl ">
          <img src="/innovation.svg" alt="Innovation Icon 1" className="w-24 h-24 mb-4" />
          <h3 className="text-xl font-semibold mb-2">1.	Streaming Technology</h3>
          <p className="text-center text-gray-700 mb-4">In pellentesque massa vida placerat duis.
          Cursus sit amet dictum sit amet</p>
          <Button className="bg-blue-800 text-white font-semibold py-3 px-4 rounded-2xl flex items-center space-x-2 hover:bg-blue-600 mt-3 ">
                  <span className='text-sm'>Explore Our Solutions</span>
                  <FaArrowAltCircleRight size={45} />
        </Button>
        </div>
        <div className="flex flex-col items-center p-6 rounded-xl ">
          <img src="/reliable.svg" alt="Innovation Icon 1" className="w-24 h-24 mb-4" />
          <h3 className="text-xl font-semibold mb-2">2.	Custom App Development</h3>
          <p className="text-center text-gray-700 mb-4">In pellentesque massa vida placerat duis.
          Cursus sit amet dictum sit amet</p>
          <Button className="bg-blue-800 text-white font-semibold py-3 px-4 rounded-2xl flex items-center space-x-2 hover:bg-blue-600 mt-3 ">
                  <span className='text-sm'>Explore Our Solutions</span>
                  <FaArrowAltCircleRight size={45} />
        </Button>
        </div>
        <div className="flex flex-col items-center p-6 rounded-xl ">
          <img src="/customization.svg" alt="Innovation Icon 1" className="w-24 h-24 mb-4" />
          <h3 className="text-xl font-semibold mb-2">3.	Analytics & Insights</h3>
          <p className="text-center text-gray-700 mb-4">In pellentesque massa vida placerat duis.
          Cursus sit amet dictum sit amet</p>
          <Button className="bg-blue-800 text-white font-semibold py-3 px-4 rounded-2xl flex items-center space-x-2 hover:bg-blue-600 mt-3 ">
                  <span className='text-sm'>Explore Our Solutions</span>
                  <FaArrowAltCircleRight size={45} />
        </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
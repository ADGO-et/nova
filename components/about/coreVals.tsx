import { Button } from "@/components/ui/button";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";

const CoreValues = () => {
  return (
    <div className='bg-background text-foreground'>
      <div className="container mx-auto md:w-[70%] py-12">
        <h2 className="text-3xl font-bold text-center ">
          Check Out Our Core Values{" "}
        </h2>
        <h2 className="text-3xl font-bold text-center mb-8">
          That We Will Follow
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 rounded-xl ">
            <Image
              src="/innovation.svg"
              alt="Innovation Icon 1"
              width={110}
              height={110}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-center text-gray-700 mb-4">
            Nova: Pioneering streaming advancements.
            </p>
            <Button className="bg-blue-800 text-white font-semibold py-3 px-4 rounded-2xl flex items-center space-x-2 hover:bg-blue-600 mt-3 ">
              <span className="text-sm">Explore More</span>
              <FaArrowAltCircleRight size={45} />
            </Button>
          </div>
          <div className="flex flex-col items-center p-6 rounded-xl ">
            <Image
              src="/reliable.svg"
              alt="Innovation Icon 1"
              width={110}
              height={110}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Reliability</h3>
            <p className="text-center text-gray-700 mb-4">
              Nova: Trusted streaming partnership.
            </p>
            <Button className="bg-blue-800 text-white font-semibold py-3 px-4 rounded-2xl flex items-center space-x-2 hover:bg-blue-600 mt-3 ">
              <span className="text-sm">Explore More</span>
              <FaArrowAltCircleRight size={45} />
            </Button>
          </div>
          <div className="flex flex-col items-center p-6 rounded-xl ">
            <Image
              src="/customization.svg"
              alt="Innovation Icon 1"
              width={110}
              height={110}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Customization</h3>
            <p className="text-center text-gray-700 mb-4">
              Nova: Tailored streaming solutions
            </p>
            <Button className="bg-blue-800 text-white font-semibold py-3 px-4 rounded-2xl flex items-center space-x-2 hover:bg-blue-600 mt-3 ">
              <span className="text-sm">Explore More</span>
              <FaArrowAltCircleRight size={45} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;

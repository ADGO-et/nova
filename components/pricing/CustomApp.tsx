// components/CustomAppsWebsites.tsx
import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";

const CustomAppsWebsites: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-black text-white py-12 px-6 rounded-2xl my-12 mx-auto w-[70%]">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          Custom Apps & Websites: Your Brand, Your Way
        </h2>
      </div>

      <div className="flex justify-center mb-8">
        <Image
          src="/pricing/mobile-mockup.png"
          alt="Mobile App Mockup"
          width={400}
          height={300}
          className="drop-shadow-lg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <div className="bg-white text-black p-6 rounded-md shadow-lg">
          <ul className="space-y-4 text-sm">
            <li className='flex gap-2'><IoMdCheckmark /> Personalized Branding</li>
            <li className='flex gap-2'><IoMdCheckmark /> Live Streaming</li>
            <li className='flex gap-2'><IoMdCheckmark /> On-Demand Features</li>
          </ul>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg">
            Learn More
          </button>
          <div className="mt-2 border-t-2 text-md text-center font-semibold ">Custom App Development</div>
        </div>

        <div className="bg-white text-black p-6 rounded-md shadow-lg">
          <ul className="space-y-4 text-sm">
            <li className='flex gap-2'><IoMdCheckmark /> Branded Website</li>
            <li className='flex gap-2'><IoMdCheckmark /> Integrated Streaming</li>
            <li className='flex gap-2'><IoMdCheckmark /> User-Friendly Design</li>
          </ul>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg">
            Learn More
          </button>
          <div className="mt-2 border-t-2 text-md text-center font-semibold ">Custom Website Development</div>
        </div>
      </div>
    </section>
  );
};

export default CustomAppsWebsites;
